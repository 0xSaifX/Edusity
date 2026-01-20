import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Book, Clock, Trophy, ChevronRight } from 'lucide-react';

const StudentDashboard = () => {
    const { user } = useAuth();

    const enrolledCourses = [
        { id: '1', title: 'Modern Entrepreneurship', progress: 65, instructor: 'Sarah Jenkins', image: 'https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&w=800&q=80' },
        { id: '2', title: 'Advanced React Patterns', progress: 30, instructor: 'Michael Chen', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80' },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="mb-10">
                <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name}! 👋</h1>
                <p className="text-gray-500">You've completed 4 courses this month. Keep it up!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                    <div className="bg-blue-50 p-3 rounded-xl border border-blue-100">
                        <Book className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                        <p className="text-2xl font-bold">12</p>
                        <p className="text-sm text-gray-500">Enrolled Courses</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                    <div className="bg-orange-50 p-3 rounded-xl border border-orange-100">
                        <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                        <p className="text-2xl font-bold">48h</p>
                        <p className="text-sm text-gray-500">Learning Hours</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                    <div className="bg-purple-50 p-3 rounded-xl border border-purple-100">
                        <Trophy className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                        <p className="text-2xl font-bold">8</p>
                        <p className="text-sm text-gray-500">Certificates Earned</p>
                    </div>
                </div>
            </div>

            <section className="space-y-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-900">My Learning</h2>
                    <button className="text-primary-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                        View All <ChevronRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {enrolledCourses.map((course) => (
                        <div key={course.id} className="bg-white p-4 rounded-3xl border border-gray-100 flex flex-col sm:flex-row gap-6 hover:shadow-lg transition-shadow">
                            <img
                                src={course.image}
                                className="w-full sm:w-48 h-32 object-cover rounded-2xl"
                                alt={course.title}
                            />
                            <div className="flex-grow space-y-3 py-2">
                                <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                                <p className="text-sm text-gray-500">Instructor: {course.instructor}</p>
                                <div className="space-y-1">
                                    <div className="flex justify-between text-sm font-medium">
                                        <span>Progress</span>
                                        <span>{course.progress}%</span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary-600 transition-all"
                                            style={{ width: `${course.progress}%` }}
                                        />
                                    </div>
                                </div>
                                <button className="text-primary-600 font-bold text-sm">Continue Lesson</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default StudentDashboard;
