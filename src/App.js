import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import CoursesDetails from './components/Courses/CoursesDetails';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Header from './components/Layout/Header';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Request from './components/Request/Request';
import Footer from './components/Layout/Footer/Footer';
import PaymentFail from './components/Payments/PaymentFail';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import Subscribe from './components/Payments/Subscribe';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import NotFound from './components/Layout/NotFound/NotFound';
import Dashboard from './components/Admin/Dasboard/Dashboard';
import AdminCourses from './components/Admin/Courses/Courses';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import Users from './components/Admin/Users/Users';

const App = () => {
  window.addEventListener("contextmenu",(e)=>{
    e.preventDefault()  
  });
  return (
  <Router>
    <Header/>
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/courses" element={<Courses />} />
      <Route  path="/course/:id" element={<CoursesDetails />} />
      <Route  path="/login" element={<Login />} />
      <Route  path="/subscribe" element={<Subscribe />} />
      <Route  path="*" element={<NotFound />} />
      <Route  path="/paymentsuccess" element={<PaymentSuccess />} />
      <Route  path="/paymentfail" element={<PaymentFail />} />
      <Route  path="/register" element={<Register />} />
      <Route  path="/profile" element={<Profile />} />
      <Route  path="/changepassword" element={<ChangePassword />} />
      <Route  path="/updateprofile" element={<UpdateProfile />} />
      <Route  path="/request" element={<Request />} />
      <Route  path="/contact" element={<Contact />} />
      <Route  path="/about" element={<About />} />
      <Route  path="/forget-password" element={<ForgetPassword />} />
      <Route  path="/reset-password/:token" element={<ResetPassword />} />

    {/* Admin Routes */}

    <Route  path="/admin/dashboard" element={<Dashboard />} />
    <Route  path="/admin/courses" element={<AdminCourses />} />
    <Route  path="/admin/users" element={<Users />} />
    <Route  path="/admin/createcourse" element={<CreateCourse />} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;