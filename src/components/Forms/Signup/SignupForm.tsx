import axios from "axios";
import React, { useRef, useState } from "react";
import FormContainer from "../../UI/FormContainer/FormContainer";
import Input from "../../UI/Input/Input";

const SignupForm: React.FC = () => {
  const lastnameInputRef = useRef<HTMLInputElement>(null);
  const firstnameInputRef = useRef<HTMLInputElement>(null);
  const companyNameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    setIsSuccess(null);
    event.preventDefault();

    const user = {
      lastName: lastnameInputRef.current?.value,
      firstName: firstnameInputRef.current?.value,
      companyName: companyNameInputRef.current?.value,
      email: emailInputRef.current!.value,
      password: passwordInputRef.current!.value,
    };

    setIsLoading(true);
    axios
      .post("http://localhost:8000/user/signup", user)
      .then((res) => {
        console.log(res.data);
        setIsSuccess(true);
      })
      .catch((err) => {
        setIsSuccess(false);
      });
    setIsLoading(false);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <h2 className="mb-10">Sign Up</h2>
        <div className="">
          <Input
            id="lastname-signup"
            label="Lastname input signup"
            placeholder="Lastname"
            type="text"
            ref={lastnameInputRef}
          />
        </div>
        <div className="flex flex-col my-4">
          <label htmlFor="firstname-signup"></label>
          <Input
            id="firstname-signup"
            label="Firstname input login"
            placeholder="Firstname"
            type="text"
            ref={firstnameInputRef}
          />
        </div>
        <div className="flex flex-col my-4">
          <label htmlFor="company-signup"></label>
          <Input
            id="company-signup"
            label="Company input signup"
            placeholder="Company name"
            type="text"
            ref={companyNameInputRef}
          />
        </div>
        <div className="flex flex-col my-4">
          <label htmlFor="email-signup"></label>
          <Input id="email-signup" label="Email input signup" placeholder="Email" type="email" ref={emailInputRef} />
        </div>
        <div className="flex flex-col my-4">
          <label htmlFor="password-signup"></label>
          <Input
            id="password-signup"
            label="Password input login"
            placeholder="Password"
            type="password"
            ref={passwordInputRef}
          />
        </div>
        <button type="submit">Submit</button>
        {isSuccess && (
          <span className="mt-2 flex justify-center items-center rounded-lg h-10 px-2 bg-green-300">
            Account created
          </span>
        )}
        {isSuccess === false && (
          <span className="mt-2 flex justify-center items-center rounded-lg h-10 text-sm font-semibold text-white px-2 bg-red">
            An error has occured.
          </span>
        )}
      </form>
    </FormContainer>
  );
};

export default SignupForm;
