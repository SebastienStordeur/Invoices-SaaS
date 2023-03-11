import React, { useContext, useRef, useState } from "react";
import FormContainer from "../../UI/FormContainer/FormContainer";
import Input from "../../UI/Input/Input";
import axios from "axios";
import { AuthContext } from "../../../context/auth-context";

interface UpdateProfileFormInterface {
  user: any;
}

const UpdateProfileForm: React.FC<UpdateProfileFormInterface> = ({ user }) => {
  const authCtx = useContext(AuthContext);

  const companyNameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const companyInputRef = useRef<HTMLInputElement>(null);

  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [isCompany, setIsCompany] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const update = {
      companyName: companyNameInputRef.current?.value,
      email: emailInputRef.current!.value,
      password: passwordInputRef.current!.value,
      company: companyInputRef.current?.value,
    };

    axios
      .put("http://localhost:8000/user/update/63f72d2f82f9bd7faabca14d", update)
      .then((res) => {
        console.log(res.data);
      })
      .catch();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        {authCtx.currentUser.companyName && (
          <div>
            <label htmlFor="company-name"></label>
            <Input
              id="company-name"
              label="Update company name"
              placeholder="Company Name"
              type="text"
              ref={companyNameInputRef}
              defaultValue={user.companyName}
            />
          </div>
        )}
        <div>
          <label htmlFor="email"></label>
          <Input
            id="email"
            label="Update Email"
            placeholder="Email"
            type="email"
            ref={emailInputRef}
            defaultValue={user.email}
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <Input id="password" label="Update Password" placeholder="Password" type="password" ref={passwordInputRef} />
        </div>
        <div>
          <label htmlFor="company"></label>
          <Input
            id="company"
            label="Update Company"
            placeholder="Company"
            type="text"
            ref={companyInputRef}
            defaultValue={user.company}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </FormContainer>
  );
};

export default UpdateProfileForm;
