import axios from "axios";
import React, { useRef, useState } from "react";
import FormContainer from "../../UI/FormContainer/FormContainer";
import Input from "../../UI/Input/Input";

const LoginForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [isSuccess, setIsSuccess] = useState<Boolean | null>(null);
  const [isEmail, setIsEmail] = useState<Boolean | null>(true);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    setIsLoading(true);
    event.preventDefault();

    const user = {
      email: emailInputRef.current!.value,
      password: passwordInputRef.current!.value,
    };

    axios
      .post("http://localhost:8000/user/login", user)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        setIsLoading(false);
        setIsSuccess(true);
      })
      .catch((err) => {
        setIsEmail(false);
      });
  };
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <h2 className="mb-10">Login</h2>
        <div className="flex flex-col">
          <label htmlFor="email-login"></label>
          <Input id="email-login" label="Email input login" placeholder="Email" type="email" ref={emailInputRef} />
          {!isEmail && <p className="text-red text-sm">Wrong email format</p>}
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
            <span className="flex justify-center items-center rounded-lg h-10 px-2 bg-green-300">Redirection</span>
          )}
        </div>
      </form>
    </FormContainer>
  );
};

export default LoginForm;
