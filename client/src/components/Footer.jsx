import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="bg-primary-600 p-2 rounded-lg">
                                <BookOpen className="text-white w-6 h-6" />
                            </div>
                            <span className="text-xl font-bold text-gray-900">Edusity</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Empowering learners with world-class education. Join millions of students today and transform your career.
                        </p>
                        <div className="flex gap-4">
                            <Twitter className="w-5 h-5 text-gray-400 hover:text-primary-600 cursor-pointer" />
                            <Github className="w-5 h-5 text-gray-400 hover:text-primary-600 cursor-pointer" />
                            <Linkedin className="w-5 h-5 text-gray-400 hover:text-primary-600 cursor-pointer" />
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Explore</h4>
                        <ul className="space-y-4 text-gray-500 text-sm">
                            <li><Link to="/courses" className="hover:text-primary-600">Courses</Link></li>
                            <li><Link to="/categories" className="hover:text-primary-600">Categories</Link></li>
                            <li><Link to="/instructors" className="hover:text-primary-600">Instructors</Link></li>
                            <li><Link to="/pricing" className="hover:text-primary-600">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Support</h4>
                        <ul className="space-y-4 text-gray-500 text-sm">
                            <li><Link to="/help" className="hover:text-primary-600">Help Center</Link></li>
                            <li><Link to="/terms" className="hover:text-primary-600">Terms of Service</Link></li>
                            <li><Link to="/privacy" className="hover:text-primary-600">Privacy Policy</Link></li>
                            <li><Link to="/contact" className="hover:text-primary-600">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Newsletter</h4>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg outline-none focus:border-primary-500 flex-grow"
                            />
                            <button className="bg-primary-600 text-white p-2 rounded-lg hover:bg-primary-700 transition-colors">
                                <Mail className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-100 pt-8 text-center text-gray-400 text-sm">
                    <p>© 2026 Edusity Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
