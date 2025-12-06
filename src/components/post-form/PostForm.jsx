import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            if (file) {
                appwriteService.deleteFile(post.featuredImage);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {post ? "Edit Post" : "Create New Post"}
                </h1>
                <p className="text-sm sm:text-base text-gray-600">
                    {post ? "Update your post information" : "Fill in the details to create a new blog post"}
                </p>
            </div>
            <form onSubmit={handleSubmit(submit)} className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-200">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    <div className="w-full lg:w-2/3">
                        <div className="space-y-6">
                            <Input
                                label="Title"
                                placeholder="Enter post title"
                                className="mb-4"
                                {...register("title", { required: true })}
                            />
                            <Input
                                label="Slug"
                                placeholder="Post slug (auto-generated)"
                                className="mb-4"
                                {...register("slug", { required: true })}
                                onInput={(e) => {
                                    setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                                }}
                            />
                            <div className="w-full">
                                <RTE label="Content" name="content" control={control} defaultValue={getValues("content")} />
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <div className="space-y-6">
                            <div>
                                <label className="inline-block mb-2 pl-1 text-sm font-medium text-gray-700">
                                    Featured Image
                                </label>
                                <Input
                                    type="file"
                                    className="mb-4"
                                    accept="image/png, image/jpg, image/jpeg, image/gif"
                                    {...register("image", { required: !post })}
                                />
                                {post && (
                                    <div className="w-full mb-4 rounded-lg overflow-hidden border border-gray-200">
                                        <img
                                            src={appwriteService.getFilePreview(post.featuredImage)}
                                            alt={post.title}
                                            className="w-full h-48 object-cover"
                                        />
                                    </div>
                                )}
                            </div>
                            <Select
                                options={["active", "inactive"]}
                                label="Status"
                                className="mb-4"
                                {...register("status", { required: true })}
                            />
                            <Button 
                                type="submit" 
                                bgColor={post ? "bg-green-600" : "bg-blue-600"} 
                                className="w-full"
                            >
                                {post ? "Update Post" : "Publish Post"}
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}