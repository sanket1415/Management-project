import React from 'react';

const SignUppage = ({ setIsSignUp, handleInputChange, handleSignUpSubmit, formData, errors }) => {
  return (
    <div className="signup-page card mx-auto my-5" style={{ maxWidth: '600px' }}>
      <div className="card-body">
        <h2 className="card-title text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSignUpSubmit}>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData?.firstName || ''} // Safe access to formData.firstName
              onChange={handleInputChange}
              className="form-control"
              required
            />
            {errors.firstName && <p className="text-danger">{errors.firstName}</p>}
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData?.lastName || ''} // Safe access to formData.lastName
              onChange={handleInputChange}
              className="form-control"
              required
            />
            {errors.lastName && <p className="text-danger">{errors.lastName}</p>}
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={formData?.email || ''} // Safe access to formData.email
              onChange={handleInputChange}
              className="form-control"
              required
            />
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData?.password || ''} // Safe access to formData.password
              onChange={handleInputChange}
              className="form-control"
              required
            />
            {errors.password && <p className="text-danger">{errors.password}</p>}
          </div>
          <button className="btn btn-primary btn-block" type="submit">Sign Up</button>
        </form>
        <button className="btn btn-secondary btn-block mt-3" onClick={() => setIsSignUp(false)}>Back to Home</button>
      </div>
    </div>
  );
};

export default SignUppage;
