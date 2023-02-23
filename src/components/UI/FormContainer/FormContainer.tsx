import React from "react";

interface FormContainerInterface {
  children: React.ReactNode;
}

const FormContainer: React.FC<FormContainerInterface> = ({ children }) => {
  return <div className="max-w-sm p-8">{children}</div>;
};

export default FormContainer;
