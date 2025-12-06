import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="relative overflow-hidden py-12 mt-auto bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-1">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="120px" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">
                                    &copy; Copyright 2025. All Rights Reserved.
                                </p>
                                <p className="text-sm text-gray-500 mt-2">
                                    Share your thoughts and stories with the world.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="h-full">
                            <h3 className="tracking-wide mb-6 text-sm font-semibold uppercase text-gray-700">
                                Company
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-600 hover:text-blue-600 transition-colors"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-600 hover:text-blue-600 transition-colors"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-600 hover:text-blue-600 transition-colors"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-600 hover:text-blue-600 transition-colors"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="h-full">
                            <h3 className="tracking-wide mb-6 text-sm font-semibold uppercase text-gray-700">
                                Support
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-600 hover:text-blue-600 transition-colors"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-600 hover:text-blue-600 transition-colors"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-600 hover:text-blue-600 transition-colors"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-600 hover:text-blue-600 transition-colors"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="h-full">
                            <h3 className="tracking-wide mb-6 text-sm font-semibold uppercase text-gray-700">
                                Legals
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-600 hover:text-blue-600 transition-colors"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-600 hover:text-blue-600 transition-colors"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-600 hover:text-blue-600 transition-colors"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer