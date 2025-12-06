import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home() {
    const [posts, setPosts] = useState([])
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    const featuredPost = posts.length > 0 ? posts[0] : null
    const otherPosts = posts.slice(1)

    if (posts.length === 0) {
        return (
            <div className="w-full min-h-screen">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-20 sm:py-32">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
                    <Container>
                        <div className="relative z-10 text-center max-w-4xl mx-auto">
                            <div className="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                                <span className="text-white text-sm font-semibold">✨ Welcome to BlogSpace</span>
                            </div>
                            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                                Share Your
                                <span className="block bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent"> Stories</span>
                            </h1>
                            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                                Discover amazing stories, share your thoughts, and connect with a community of writers and readers
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                {!authStatus ? (
                                    <>
                                        <Link 
                                            to="/signup"
                                            className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-gray-50"
                                        >
                                            Get Started
                                        </Link>
                                        <Link 
                                            to="/login"
                                            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                                        >
                                            Sign In
                                        </Link>
                                    </>
                                ) : (
                                    <Link 
                                        to="/add-post"
                                        className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-gray-50"
                                    >
                                        Create Your First Post
                                    </Link>
                                )}
                            </div>
                        </div>
                    </Container>
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-gray-50">
                    <Container>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:rotate-6 transition-transform">
                                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Write Freely</h3>
                                <p className="text-gray-600">Express your thoughts with our rich text editor</p>
                            </div>
                            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:rotate-6 transition-transform">
                                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Connect & Share</h3>
                                <p className="text-gray-600">Join a community of passionate writers</p>
                            </div>
                            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:rotate-6 transition-transform">
                                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Beautiful Design</h3>
                                <p className="text-gray-600">Showcase your content with stunning visuals</p>
                            </div>
                        </div>
                    </Container>
                </section>
            </div>
        )
    }

    return (
        <div className='w-full min-h-screen'>
            {/* Hero Section with Featured Post */}
            {featuredPost && (
                <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20 sm:py-32">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
                    <Container>
                        <div className="relative z-10">
                            <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                                <span className="text-white text-sm font-semibold">⭐ Featured Story</span>
                            </div>
                            <Link to={`/post/${featuredPost.$id}`} className="block group">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                    <div className="order-2 lg:order-1">
                                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-pink-200 transition-all duration-300">
                                            {featuredPost.title}
                                        </h1>
                                        <p className="text-xl text-white/80 mb-6 line-clamp-3">
                                            Discover this amazing story and dive into a world of creativity
                                        </p>
                                        <div className="flex items-center gap-4">
                                            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/30">
                                                Read More →
                                            </span>
                                        </div>
                                    </div>
                                    <div className="order-1 lg:order-2 relative group-hover:scale-105 transition-transform duration-500">
                                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                                            <img 
                                                src={appwriteService.getFilePreview(featuredPost.featuredImage)} 
                                                alt={featuredPost.title}
                                                className="w-full h-[400px] sm:h-[500px] object-cover"
                                            />
                                        </div>
                                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </Container>
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
                </section>
            )}

            {/* Latest Posts Section */}
            <section className="py-20 bg-gray-50">
                <Container>
                    <div className="text-center mb-12">
                        <div className="inline-block mb-4">
                            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Latest Stories</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                            Explore More
                            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Amazing Content</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Dive into a collection of inspiring stories and thought-provoking articles
                        </p>
                    </div>

                    {otherPosts.length > 0 ? (
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                            {otherPosts.map((post, index) => (
                                <div 
                                    key={post.$id} 
                                    className="transform hover:-translate-y-2 transition-all duration-300"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <PostCard {...post} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="inline-block p-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl mb-6">
                                <svg className="w-16 h-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">More Stories Coming Soon</h3>
                            <p className="text-gray-600">Check back later for more amazing content!</p>
                        </div>
                    )}
                </Container>
            </section>

            {/* CTA Section */}
            {!authStatus && (
                <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
                    <Container>
                        <div className="relative z-10 text-center max-w-3xl mx-auto">
                            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                                Ready to Share Your Story?
                            </h2>
                            <p className="text-xl text-white/90 mb-8">
                                Join our community of writers and start creating amazing content today
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link 
                                    to="/signup"
                                    className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                                >
                                    Get Started Free
                                </Link>
                                <Link 
                                    to="/login"
                                    className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                                >
                                    Sign In
                                </Link>
                            </div>
                        </div>
                    </Container>
                </section>
            )}
        </div>
    )
}

export default Home