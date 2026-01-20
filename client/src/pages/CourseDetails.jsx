import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses, instructors } from '../data/courses';
import { Star, Users, Clock, DollarSign, PlayCircle, CheckCircle, Award } from 'lucide-react';

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));
  const instructor = instructors.find(inst => inst.id === course?.instructor);

  if (!course || !instructor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <Link to="/courses" className="btn-primary">Back to Courses</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-sm text-primary-600 font-medium mb-2">{course.category}</div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{course.title}</h1>
              <p className="text-lg text-gray-600 mb-6">{course.description}</p>

              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{instructor.name}</p>
                    <p className="text-sm text-gray-500">Instructor</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-medium">{course.rating}</span>
                  <span className="text-gray-500">({course.students} students)</span>
                </div>
              </div>

              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-gray-400" />
                  <span className="text-2xl font-bold text-gray-900">${course.cost}</span>
                </div>
              </div>

              <button className="btn-primary mr-4">Enroll Now</button>
              <button className="btn-secondary">
                <PlayCircle className="w-5 h-5 mr-2" />
                Preview Course
              </button>
            </div>

            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">${course.cost}</div>
                  <div className="text-sm text-gray-500">Full Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What You'll Learn */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.syllabus.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor Info */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Instructor</h2>
              <div className="flex items-start gap-6">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-20 h-20 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{instructor.name}</h3>
                  <p className="text-gray-600 mb-4">{instructor.education}</p>
                  <p className="text-gray-600 mb-4">{instructor.experience}</p>
                  <div className="flex flex-wrap gap-2">
                    {instructor.awards.map((award, index) => (
                      <span key={index} className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                        <Award className="w-3 h-3 inline mr-1" />
                        {award}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Stats */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-4">Course Statistics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Students</span>
                  <span className="font-medium">{course.students.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rating</span>
                  <span className="font-medium">{course.rating}/5.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Language</span>
                  <span className="font-medium">English</span>
                </div>
              </div>
            </div>

            {/* Related Courses */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-4">Related Courses</h3>
              <div className="space-y-3">
                {courses
                  .filter(c => c.category === course.category && c.id !== course.id)
                  .slice(0, 3)
                  .map(relatedCourse => (
                    <Link
                      key={relatedCourse.id}
                      to={`/course/${relatedCourse.id}`}
                      className="block p-3 rounded-lg border border-gray-200 hover:border-primary-300 transition-colors"
                    >
                      <h4 className="font-medium text-gray-900 text-sm mb-1">{relatedCourse.title}</h4>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span>{relatedCourse.rating}</span>
                        <span>•</span>
                        <span>${relatedCourse.cost}</span>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
