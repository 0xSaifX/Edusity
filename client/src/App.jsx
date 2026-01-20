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
import { AuthProvider } from './context/AuthContext';

// Placeholder components for footer links
const Courses = () => <div className="p-20 text-center"><h1 className="text-3xl">Courses Page</h1><p>Coming soon...</p></div>;
const Categories = () => <div className="p-20 text-center"><h1 className="text-3xl">Categories Page</h1><p>Coming soon...</p></div>;
const Instructors = () => <div className="p-20 text-center"><h1 className="text-3xl">Instructors Page</h1><p>Coming soon...</p></div>;
const Pricing = () => <div className="p-20 text-center"><h1 className="text-3xl">Pricing Page</h1><p>Coming soon...</p></div>;
const HelpCenter = () => <div className="p-20 text-center"><h1 className="text-3xl">Help Center</h1><p>Coming soon...</p></div>;
const TermsOfService = () => <div className="p-20 text-center"><h1 className="text-3xl">Terms of Service</h1><p>Coming soon...</p></div>;
const PrivacyPolicy = () => <div className="p-20 text-center"><h1 className="text-3xl">Privacy Policy</h1><p>Coming soon...</p></div>;
const Contact = () => <div className="p-20 text-center"><h1 className="text-3xl">Contact Us</h1><p>Coming soon...</p></div>;

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
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
