import React from 'react';
import { PlayCircle, Users, Award, Star, Search, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="space-y-20">
            {/* Hero Section */}
            <section className="relative pt-20 pb-16 overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-primary-50 rounded-bl-[100px] hidden lg:block" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8 text-center lg:text-left"
                        >
                            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900">
                                Master New Skills <br />
                                <span className="text-primary-600">With Expert Online</span> <br />
                                Courses
                            </h1>
                            <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                                Join over 10 million learners from all around the world. Study for your dream career or level up your hobby with our expert-led courses.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <button onClick={() => navigate('/register')} className="btn-primary shadow-xl shadow-primary-200">Start Learning Free</button>
                                <button onClick={() => navigate('/')} className="btn-secondary">Explore All Courses</button>
                            </div>
                            <div className="flex items-center gap-8 justify-center lg:justify-start pt-4">
                                <div className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-primary-500" />
                                    <span className="font-semibold text-gray-700">10k+ Students</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                    <span className="font-semibold text-gray-700">4.8 Rating</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
                                alt="Students learning"
                                className="rounded-3xl shadow-2xl relative z-10"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block">
                                <div className="flex items-center gap-4">
                                    <div className="bg-green-100 p-2 rounded-lg">
                                        <Award className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Certified Experts</p>
                                        <p className="text-sm text-gray-500">Learn from the best</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Course Categories Section */}
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Top Categories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {['School subjects', 'Business', 'Entrepreneurship', 'Technology', 'Design', 'Marketing'].map((cat) => (
                            <div key={cat} onClick={() => navigate('/')} className="p-8 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all cursor-pointer group">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600">{cat}</h3>
                                <p className="text-gray-500">Explore over 500+ courses in this field.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
