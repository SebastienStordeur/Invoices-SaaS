import React from "react";
import LoginForm from "../components/Forms/Login/LoginForm";
import SignupForm from "../components/Forms/Signup/SignupForm";

const HomePage = () => {
  return (
    <div className="text-3xl">
      <LoginForm />
      <SignupForm />
    </div>
  );
};

export default HomePage;
