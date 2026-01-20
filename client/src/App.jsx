import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import AdminDashboard from './pages/AdminDashboard';
import CourseDetails from './pages/CourseDetails';
import LearningPage from './pages/LearningPage';
import Courses from './pages/Courses';
import Categories from './pages/Categories';
import Instructors from './pages/Instructors';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard/student" element={<StudentDashboard />} />
              <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
              <Route path="/dashboard/admin" element={<AdminDashboard />} />
              <Route path="/course/:id" element={<CourseDetails />} />
              <Route path="/learn/:id" element={<LearningPage />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/instructors" element={<Instructors />} />
              <Route path="/pricing" element={<div className="p-20 text-center"><h1 className="text-3xl">Pricing Page</h1><p>Coming soon...</p></div>} />
              <Route path="/help" element={<div className="p-20 text-center"><h1 className="text-3xl">Help Center</h1><p>Coming soon...</p></div>} />
              <Route path="/terms" element={<div className="p-20 text-center"><h1 className="text-3xl">Terms of Service</h1><p>Coming soon...</p></div>} />
              <Route path="/privacy" element={<div className="p-20 text-center"><h1 className="text-3xl">Privacy Policy</h1><p>Coming soon...</p></div>} />
              <Route path="/contact" element={<div className="p-20 text-center"><h1 className="text-3xl">Contact Us</h1><p>Coming soon...</p></div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
