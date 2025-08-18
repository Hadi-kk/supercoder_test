import React from "react";
import clsx from "clsx";

export interface AuthCheckboxProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
  id?: string;
}

const AuthCheckbox: React.FC<AuthCheckboxProps> = ({
  checked,
  onChange,
  label,
  className = "",
  id,
}) => (
  <div className={clsx("flex items-center", className)}>
    <label htmlFor={id} className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="sr-only peer"
      />
      <span className="flex items-center justify-center w-5 h-5 mr-2 rounded bg-gray-200 peer-checked:bg-[#FFD600] text-white">
        {checked && (
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        )}
      </span>
      <span className="text-sm text-gray-700">{label}</span>
    </label>
  </div>
);

export default AuthCheckbox;
