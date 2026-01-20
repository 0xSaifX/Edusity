import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BookOpen, LogOut, User, Menu, X } from 'lucide-react';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = React.useState(false);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="sticky top-0 z-50 glass-morphism shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="bg-primary-600 p-2 rounded-lg group-hover:bg-primary-500 transition-colors">
                            <BookOpen className="text-white w-6 h-6" />
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-indigo-600">
                            Edusity
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/" className="text-gray-600 hover:text-primary-600 transition-colors">Courses</Link>
                        <Link to="/" className="text-gray-600 hover:text-primary-600 transition-colors">Categories</Link>
                        <Link to="/" className="text-gray-600 hover:text-primary-600 transition-colors">Business</Link>

                        {user ? (
                            <div className="flex items-center gap-4">
                                <Link
                                    to={`/dashboard/${user.role}`}
                                    className="flex items-center gap-2 text-gray-700 font-medium hover:text-primary-600"
                                >
                                    <User className="w-5 h-5" />
                                    Dashboard
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors"
                                >
                                    <LogOut className="w-5 h-5" />
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-4">
                                <Link to="/login" className="text-gray-600 hover:text-primary-600">Login</Link>
                                <Link to="/register" className="btn-primary py-2 px-4 shadow-md bg-gradient-to-r from-primary-600 to-indigo-600">
                                    Get Started
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t p-4 space-y-4">
                    <Link to="/" className="block text-gray-600">Courses</Link>
                    <Link to="/" className="block text-gray-600">Categories</Link>
                    {user ? (
                        <>
                            <Link to={`/dashboard/${user.role}`} className="block text-gray-600">Dashboard</Link>
                            <button onClick={handleLogout} className="text-red-500 block">Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="block text-gray-600">Login</Link>
                            <Link to="/register" className="block text-primary-600 font-semibold">Get Started</Link>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
