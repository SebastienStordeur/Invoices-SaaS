import React from "react";

interface ButtonInterface {
  id: string;
  className: string;
  aria: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonInterface> = ({ id, className, aria, onClick, children }) => {
  return (
    <button
      id={id}
      aria-label={aria}
      className={`flex justify-center items-center bg-white px-2 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
