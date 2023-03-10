import React, { useContext, useEffect, useState } from "react";
import LoginForm from "../components/Forms/Login/LoginForm";
import SignupForm from "../components/Forms/Signup/SignupForm";
import FormContainer from "../components/UI/FormContainer/FormContainer";
import { AuthContext } from "../context/auth-context";

const HomePage: React.FC = () => {
  const [signup, setSignup] = useState<boolean>(true);

  const authCtx = useContext(AuthContext);
  useEffect(() => {
    authCtx.getAuth();
  }, []);
  return (
    <div className="">
      <FormContainer>
        {!signup && <LoginForm />}
        {signup && <SignupForm />}
        <p className="text-md text-center -mt-4">
          {signup ? "Already have an account?" : "Need an account?"}
          <span className="text-red font-semibold cursor-pointer" onClick={() => setSignup((prev) => !prev)}>
            {signup ? "Log In" : "Sign Up"}
          </span>
        </p>
      </FormContainer>
    </div>
  );
};

export default HomePage;
