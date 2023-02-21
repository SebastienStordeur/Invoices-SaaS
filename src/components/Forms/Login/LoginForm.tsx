import React from "react";

const LoginForm: React.FC = () => {
  return (
    <form>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" />
      </div>
    </form>
  );
};

export default LoginForm;
