import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import TeacherLogin from './components/TeacherLogin';
import StudentLogin from './components/StudentLogin';
import SignUppage from './components/SignUppage';

function App() {
  const [isTeacherLogin, setIsTeacherLogin] = useState(false);
  const [isStudentLogin, setIsStudentLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    firstName: '',  // Ensure this is initialized as an empty string
    lastName: '',
    email: '',
    phone: '',
    gender: '',
  });
  
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value, // Update the respective field in formData
    }));
  };
  

  return (
    <div className="app-container container-fluid">
      {!isTeacherLogin && !isStudentLogin && !isSignUp && <Home setIsTeacherLogin={setIsTeacherLogin} setIsStudentLogin={setIsStudentLogin} />}
      {isTeacherLogin && <TeacherLogin setIsTeacherLogin={setIsTeacherLogin} setIsSignUp={setIsSignUp} handleInputChange={handleInputChange} formData={formData} />}
      {isStudentLogin && <StudentLogin setIsStudentLogin={setIsStudentLogin} setIsSignUp={setIsSignUp} handleInputChange={handleInputChange} formData={formData} />}
      {isSignUp && <SignUppage setIsSignUp={setIsSignUp} handleInputChange={handleInputChange} formData={formData} />}
    </div>
  );
}

export default App;
