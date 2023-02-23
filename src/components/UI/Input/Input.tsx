import React, { forwardRef } from "react";

interface InputInterface {
  id: string;
  label: string;
  placeholder?: string;
  className?: string;
  type?: string;
  ref: React.ForwardedRef<HTMLInputElement>;
}

const Input: React.FC<InputInterface> = forwardRef(({ id, label, placeholder, className, type }, ref) => {
  return (
    <input
      id={id}
      aria-label={label}
      placeholder={placeholder}
      className={`h-10 w-full rounded-lg shadow-md px-2 text-lg placeholder:text-lg ${className}`}
      type={type || "text"}
      ref={ref}
    />
  );
});

export default Input;
