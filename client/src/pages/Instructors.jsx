import React from 'react';
import { instructors, courses } from '../data/courses';
import { Award, GraduationCap, Briefcase, Star } from 'lucide-react';

const Instructors = () => {
  const getInstructorCourses = (instructorId) => {
    return courses.filter(course => course.instructor === instructorId);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Instructors</h1>
          <p className="text-lg text-gray-600">Learn from industry leaders and academic experts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {instructors.map((instructor) => {
            const instructorCourses = getInstructorCourses(instructor.id);
            return (
              <div key={instructor.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{instructor.name}</h2>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <GraduationCap className="w-5 h-5 text-primary-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900">Education</p>
                          <p className="text-gray-600 text-sm">{instructor.education}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Briefcase className="w-5 h-5 text-primary-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900">Experience</p>
                          <p className="text-gray-600 text-sm">{instructor.experience}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-primary-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900">Awards & Recognition</p>
                          <ul className="text-gray-600 text-sm space-y-1">
                            {instructor.awards.map((award, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                {award}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <h3 className="font-bold text-gray-900 mb-3">Courses Taught ({instructorCourses.length})</h3>
                      <div className="space-y-2">
                        {instructorCourses.map((course) => (
                          <div key={course.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                            <div>
                              <p className="font-medium text-gray-900 text-sm">{course.title}</p>
                              <p className="text-gray-500 text-xs">{course.category}</p>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                <span className="text-xs font-medium">{course.rating}</span>
                              </div>
                              <p className="text-xs text-gray-500">{course.students} students</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Instructors;