import axios from "axios";
import React, { useRef, useState } from "react";
import { validationEmail } from "../../../utils/formValidation/EmailValidation";
import FormContainer from "../../UI/FormContainer/FormContainer";
import Input from "../../UI/Input/Input";
import { validateName, validateText } from "../../../utils/formValidation/NamesValidation";

const SignupForm: React.FC = () => {
  const lastnameInputRef = useRef<HTMLInputElement>(null);
  const firstnameInputRef = useRef<HTMLInputElement>(null);
  const companyNameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [isCompany, setIsCompany] = useState<boolean>(false);

  const [emailHasError, setEmailHasError] = useState<boolean>(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const [lastnameHasError, setLastnameHasError] = useState<boolean>(true);
  const [lastnameErrorMessage, setLastnameErrorMessage] = useState<string>("");
  const [firstnameHasError, setFirstnameHasError] = useState<boolean>(true);
  const [firstnameErrorMessage, setFirstnameErrorMessage] = useState<string>("");
  const [companyHasError, setCompanyHasError] = useState<boolean>(false);
  const [companyErrorMessage, setCompanyErrorMessage] = useState<string>("");
  const [passwordHasError, setPasswordHasError] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
    setIsSuccess(null);
    event.preventDefault();

    const user = {
      lastName: !isCompany ? lastnameInputRef.current!.value : lastnameInputRef.current?.value,
      firstName: !isCompany ? firstnameInputRef.current!.value : firstnameInputRef.current?.value,
      companyName: isCompany ? companyNameInputRef.current!.value : companyNameInputRef.current?.value,
      email: emailInputRef.current!.value,
      password: passwordInputRef.current!.value,
    };

    const lastnameValidated = await validateName(user.lastName, setLastnameHasError, setLastnameErrorMessage);
    const firstnameValidated = await validateName(user.firstName, setFirstnameHasError, setFirstnameErrorMessage);
    const companyValidated = await validateText(user.companyName, setCompanyHasError, setCompanyErrorMessage);
    const emailValidated = await validationEmail(user.email, setEmailHasError, setEmailErrorMessage);
    const passwordValidated = user.password.length >= 8 ? true : false;

    passwordValidated ? setPasswordHasError(false) : setPasswordHasError(true);

    if (!isCompany && (!lastnameValidated || !firstnameValidated || !emailValidated || !passwordValidated)) {
      return;
    }

    if (isCompany && (!companyValidated || !emailValidated || !passwordValidated)) {
      return;
    }

    setIsLoading(true);
    axios
      .post("http://localhost:8000/user/signup", user)
      .then((res) => {
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
        <div className="flex justify-between">
          <h3>Are you a company?</h3>
          <input type="checkbox" id="company-trigger" onClick={() => setIsCompany((prev) => !prev)} />
        </div>
        {!isCompany && (
          <React.Fragment>
            <div className="">
              <Input
                id="lastname-signup"
                label="Lastname input signup"
                placeholder="Lastname"
                type="text"
                ref={lastnameInputRef}
              />
              {lastnameHasError && <p>{lastnameErrorMessage}</p>}
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
              {firstnameHasError && <p>{firstnameErrorMessage}</p>}
            </div>
          </React.Fragment>
        )}
        {isCompany && (
          <div className="flex flex-col my-4">
            <label htmlFor="company-signup"></label>
            <Input
              id="company-signup"
              label="Company input signup"
              placeholder="Company name"
              type="text"
              ref={companyNameInputRef}
            />
            {companyHasError && <p>{companyErrorMessage}</p>}
          </div>
        )}
        <div className="flex flex-col my-4">
          <label htmlFor="email-signup"></label>
          <Input id="email-signup" label="Email input signup" placeholder="Email" type="email" ref={emailInputRef} />
          {emailHasError && <p>{emailErrorMessage}</p>}
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
          {passwordHasError && <p>Password is too short</p>}
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
