import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <article className="max-w-4xl mx-auto">
                    {/* Featured Image */}
                    <div className="w-full mb-6 sm:mb-8 relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                        {isAuthor && (
                            <div className="absolute right-3 top-3 sm:right-6 sm:top-6 flex flex-col sm:flex-row gap-2 sm:gap-3">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button bgColor="bg-green-600" className="shadow-lg text-xs sm:text-sm px-3 sm:px-6 py-2">
                                        Edit
                                    </Button>
                                </Link>
                                <Button bgColor="bg-red-600" onClick={deletePost} className="shadow-lg text-xs sm:text-sm px-3 sm:px-6 py-2">
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Post Title */}
                    <div className="w-full mb-6 sm:mb-8">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            {post.title}
                        </h1>
                        {post.status && (
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                                {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                            </div>
                        )}
                    </div>

                    {/* Post Content */}
                    <div className="browser-css bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg border border-gray-200">
                        {parse(post.content)}
                    </div>
                </article>
            </Container>
        </div>
    ) : null;
}