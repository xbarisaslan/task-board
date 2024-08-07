import React from "react";
// import { useRouter } from "next/navigation";

function LoginForm({ onRegisterClick }) {
  //   const router = useRouter();

  return (
    <form className="flex flex-col items-center space-y-5 lg:space-y-8">
      <h1 className="text-3xl">LOGIN</h1>

      <div className="flex flex-col gap-2 w-full">
        <label className="text-start" htmlFor="email">
          Email
        </label>
        <input className="border-2 px-2" id="email" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label className="text-start" htmlFor="password">
          Password
        </label>
        <input className="border-2 px-2" id="password" type="password" />
      </div>

      <button className="border-2 cursor-pointer w-full py-0.5" type="submit">
        Login
      </button>

      <p>
        Don’t have an account?{" "}
        <span
          className="cursor-pointer text-blue-500"
          onClick={onRegisterClick}
        >
          Register now!
        </span>
      </p>
    </form>
  );
}

export default LoginForm;
