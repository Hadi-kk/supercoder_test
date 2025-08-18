import React from "react";
import LoginForm from "../features/auth/components/molecules/LoginForm";

const LoginSignup: React.FC = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-[#F8F6EE] bg-[image:linear-gradient(180deg,_#FFFFFF_0%,_rgba(255,255,255,0)_100%),_radial-gradient(30.89%_38.32%_at_65.1%_72.41%,_rgba(255,196,11,0.05)_0%,_rgba(255,196,11,0)_100%),_radial-gradient(22.27%_29.38%_at_31.69%_30.98%,_rgba(255,196,11,0.1)_0%,_rgba(255,196,11,0)_100%)]">
      <main className="bg-white rounded-2xl  p-24 pb-28 w-full max-w-3xl flex flex-col items-center">
        <img src="/assets/logo.svg" alt="LANDAS Logo" className="mb-24 w-40" />
        <div className="w-full max-w-[592px]">
          <LoginForm />
        </div>
      </main>
      <footer className="mt-12 text-xs text-gray-400 text-center">
        Copyright © WWW.ksb2dmail.com All right reserved
      </footer>
    </div>
  );
};

export default LoginSignup;
