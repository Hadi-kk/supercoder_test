import React, { useState } from "react";
import AuthInput from "../atoms/AuthInput";
import AuthCheckbox from "../atoms/AuthCheckbox";
import BasicButton from "../../../../shared/components/atoms/buttons/BasicButton";
import clsx from "clsx";

const LoginForm: React.FC = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [saveId, setSaveId] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [idError, setIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const isFormValid = id.length > 0 && password.length > 0;

  const validate = () => {
    let isValid = true;
    if (!id) {
      setIdError("아이디를 입력하지 않았습니다.");
      isValid = false;
    } else {
      setIdError("");
    }

    if (!password) {
      setPasswordError("비밀번호를 입력하지 않았습니다.");
      isValid = false;
    } else {
      // This is for the general login failure message shown in the image
      // For now, we only validate for presence.
      // setPasswordError("아이디 또는 비밀번호가 일치하지 않습니다.");
      setPasswordError("");
    }
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted", { id, password });
      // Here you would typically handle the login logic
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full grid grid-cols-[80px_1fr] items-start gap-y-4 gap-x-16"
    >
      <label
        htmlFor="id-input"
        className="text-sm font-medium text-gray-500 text-left pt-3"
      >
        아이디
      </label>
      <div className="flex flex-col">
        <AuthInput
          id="id-input"
          type="text"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
            if (idError) setIdError("");
          }}
          placeholder="아이디를 입력해주세요."
          hasError={!!idError}
        />
        {idError && <p className="text-xs text-red-500 mt-1">{idError}</p>}
      </div>

      <label
        htmlFor="password-input"
        className="text-sm font-medium text-gray-500 text-left pt-3"
      >
        비밀번호
      </label>
      <div className="flex flex-col">
        <AuthInput
          id="password-input"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (passwordError) setPasswordError("");
          }}
          placeholder="비밀번호를 입력해주세요."
          hasError={!!passwordError}
          icon={
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label="비밀번호 보기"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          }
        />
        {passwordError && (
          <p className="text-xs text-red-500 mt-1">{passwordError}</p>
        )}
      </div>

      <div className="col-span-2 flex items-center justify-between gap-2 mt-2">
        <AuthCheckbox
          checked={saveId}
          onChange={(e) => setSaveId(e.target.checked)}
          label="아이디 저장"
          id="saveId"
        />
        <div className="text-xs text-gray-500">
          <a href="#" className="hover:underline">
            아이디찾기
          </a>
          <span className="mx-1">|</span>
          <a href="#" className="hover:underline">
            비밀번호 찾기
          </a>
        </div>
      </div>

      <div className="col-span-2 flex flex-col gap-4 mt-6">
        <BasicButton
          type="submit"
          isDisabled={!isFormValid}
          className={clsx(
            "w-full py-3 rounded-lg font-semibold text-base",
            isFormValid
              ? "bg-[#FFD600] text-black"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          )}
        >
          로그인
        </BasicButton>
        <BasicButton
          type="button"
          className="w-full py-3 rounded-lg border border-gray-200 font-semibold text-base bg-white hover:bg-gray-50 text-gray-600"
        >
          회원가입
        </BasicButton>
      </div>
    </form>
  );
};

export default LoginForm;
