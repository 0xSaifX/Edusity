import React from 'react';
import { Link } from 'react-router-dom';
import { categories, courses, instructors } from '../data/courses';
import { Star, Users, Clock, DollarSign } from 'lucide-react';

const Categories = () => {
  const getInstructor = (id) => instructors.find(inst => inst.id === id);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Course Categories</h1>
          <p className="text-lg text-gray-600">Explore our comprehensive course offerings</p>
        </div>

        {categories.map((category) => (
          <div key={category.name} className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.name}</h2>
                  <p className="text-gray-600 text-lg mb-6">{category.description}</p>
                  <div className="text-sm text-gray-500">
                    {category.courses.length} courses available
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.courses.map((courseId) => {
                const course = courses.find(c => c.id === courseId);
                const instructor = getInstructor(course.instructor);
                return (
                  <div key={course.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        <Link to={`/course/${course.id}`} className="hover:text-primary-600">
                          {course.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

                      <div className="flex items-center gap-2 mb-3">
                        <img
                          src={instructor.image}
                          alt={instructor.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="text-sm font-medium text-gray-700">{instructor.name}</span>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          ${course.cost}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="text-sm font-medium">{course.rating}</span>
                          <span className="text-sm text-gray-500">({course.students})</span>
                        </div>
                        <Link
                          to={`/course/${course.id}`}
                          className="btn-primary text-sm py-2 px-4"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;