import axios from "axios";
import React, { useRef, useState } from "react";
import FormContainer from "../../UI/FormContainer/FormContainer";
import Input from "../../UI/Input/Input";
import { validationEmail } from "../../../utils/formValidation/EmailValidation";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [emailHasError, setEmailHasError] = useState<boolean>(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const navigate = useNavigate();

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    setIsSuccess(null);
    event.preventDefault();

    const user = {
      email: emailInputRef.current!.value,
      password: passwordInputRef.current!.value,
    };

    const validated = await validationEmail(user.email, setEmailHasError, setEmailErrorMessage);

    if (!validated) return;
    setIsLoading(true);

    axios
      .post("http://localhost:8000/user/login", user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);

        setIsSuccess(true);
        navigate("/dashboard");
      })
      .catch((err) => {
        setEmailHasError(false);
        setIsSuccess(false);
      });

    setIsLoading(false);
  };
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <h2 className="mb-10">Login</h2>
        <div className="flex flex-col">
          <label htmlFor="email-login"></label>
          <Input id="email-login" label="Email input login" placeholder="Email" type="email" ref={emailInputRef} />
          {emailHasError && <p className="flex justify-end text-red text-sm font-semibold">{emailErrorMessage}</p>}
        </div>
        <div className="flex flex-col my-4">
          <label htmlFor="password-login"></label>
          <Input
            id="password-login"
            label="Password input login"
            placeholder="Password"
            type="password"
            ref={passwordInputRef}
          />
        </div>
        <div className="flex flex-col">
          <button type="submit" className="border rounded px-4">
            {isLoading ? "Loading" : "Submit"}
          </button>
          {isSuccess && (
            <span className="mt-2 flex justify-center items-center rounded-lg h-10 px-2 bg-green-300">
              Login Successful
            </span>
          )}
          {isSuccess === false && (
            <span className="mt-2 flex justify-center items-center rounded-lg h-10 text-sm font-semibold text-white px-2 bg-red">
              Wrong email or password
            </span>
          )}
        </div>
      </form>
    </FormContainer>
  );
};

export default LoginForm;
