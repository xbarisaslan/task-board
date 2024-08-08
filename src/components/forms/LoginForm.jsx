import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/auth";

function LoginForm({ onRegisterClick }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await login(email, password);
      console.log("Login successful:", data);
      router.push("/dashboard");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center space-y-5 lg:space-y-8"
    >
      <h1 className="text-3xl">LOGIN</h1>

      <div className="flex flex-col gap-2 w-full">
        <label className="text-start" htmlFor="email">
          Email
        </label>
        <input
          className="border-2 px-2"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label className="text-start" htmlFor="password">
          Password
        </label>
        <input
          className="border-2 px-2"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="border-2 cursor-pointer w-full py-0.5" type="submit">
        Login
      </button>

      <p className="text-center">
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
