"use client";

import { useState } from "react";
import LoginForm from "@/components/forms/LoginForm";
import RegisterForm from "@/components/forms/RegisterForm";

export default function Home() {
  const [formContent, setFormContent] = useState("login");

  return (
    <main className="flex min-h-screen items-center justify-center gap-32 p-24">
      {formContent === "register" ? (
        <RegisterForm onLoginClick={() => setFormContent("login")} />
      ) : (
        <LoginForm onRegisterClick={() => setFormContent("register")} />
      )}
    </main>
  );
}
