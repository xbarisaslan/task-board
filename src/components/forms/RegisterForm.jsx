"use client";
import React, { useState } from "react";
import { register } from "@/lib/auth";

function RegisterForm({ onLoginClick }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await register(name, email, password);
      console.log("Signed up successfully:", data);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center space-y-5 lg:space-y-8"
    >
      <h1 className="text-3xl font-medium">SIGN UP</h1>

      <div className="flex flex-col gap-2 w-full">
        <label className="text-start" htmlFor="name">
          Full Name
        </label>
        <input
          className="border-2 px-2"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

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
        Sign Up
      </button>

      <p className="text-center">
        Already have an account?{" "}
        <span className="cursor-pointer text-blue-500" onClick={onLoginClick}>
          Login now!
        </span>
      </p>
    </form>
  );
}

export default RegisterForm;
