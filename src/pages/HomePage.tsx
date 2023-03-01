import React, { useState } from "react";
import LoginForm from "../components/Forms/Login/LoginForm";
import SignupForm from "../components/Forms/Signup/SignupForm";

const HomePage: React.FC = () => {
  const [signup, setSignup] = useState<boolean>(true);
  return (
    <div className="">
      {!signup && <LoginForm />}
      {signup && <SignupForm />}
      <p className="text-md">
        Already have an account?{" "}
        <span className="text-red font-semibold cursor-pointer" onClick={() => setSignup((prev) => !prev)}>
          {signup ? "Log In" : "Sign Up"}
        </span>
      </p>
    </div>
  );
};

export default HomePage;
