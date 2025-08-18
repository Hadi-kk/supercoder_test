import React from "react";
import clsx from "clsx";

export interface AuthInputProps {
  id?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  icon?: React.ReactNode;
  hasError?: boolean;
}

const AuthInput: React.FC<AuthInputProps> = ({
  id,
  type = "text",
  value,
  onChange,
  placeholder = "",
  className = "",
  disabled = false,
  autoFocus = false,
  icon,
  hasError = false,
}) => (
  <div className={clsx("relative w-full", className)}>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      autoFocus={autoFocus}
      className={clsx(
        "w-full px-4 py-3 rounded-lg border-none bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FFD600] focus:bg-white h-[56px]",
        {
          "ring-2 ring-red-500": hasError,
        }
      )}
    />
    {icon && (
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
        {icon}
      </span>
    )}
  </div>
);

export default AuthInput;
