import React, { useState } from "react";

const Profile = () => {
  const [userName, setUserName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [login, setLogin] = useState("john_doe");

  const handleNameChange = (e) => setUserName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  const handleLoginChange = (e) => setLogin(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert(`Profile Updated!\nName: ${userName}\nEmail: ${email}\nLogin: ${login}`);
  };

  return (
    <div className="container mx-auto p-6 max-w-xl bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-3xl font-semibold text-blue-700 mb-6 text-center">User Profile</h1>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-lg font-medium">Full Name:</label>
          <input
            type="text"
            id="name"
            value={userName}
            onChange={handleNameChange}
            className="w-full p-3 mt-2 bg-transparent border-b focus:outline-none"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-lg font-medium">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full p-3 mt-2 bg-transparent border-b focus:outline-none"
            placeholder="Enter your email"
          />
        </div>

        {/* Login Field */}
        <div className="mb-4">
          <label htmlFor="login" className="block text-gray-700 text-lg font-medium">Username (Login):</label>
          <input
            type="text"
            id="login"
            value={login}
            onChange={handleLoginChange}
            className="w-full p-3 mt-2 bg-transparent border-b focus:outline-none"
            placeholder="Enter your username"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-lg font-medium">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full p-3 mt-2 bg-transparent border-b focus:outline-none"
            placeholder="Enter your password"
          />
        </div>

        {/* Confirm Password Field */}
        <div className="mb-6">
          <label htmlFor="confirm-password" className="block text-gray-700 text-lg font-medium">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="w-full p-3 mt-2 bg-transparent border-b focus:outline-none"
            placeholder="Confirm your password"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 focus:outline-none"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
