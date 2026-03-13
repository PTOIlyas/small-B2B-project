"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e: any) => {
    e.preventDefault();

    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  };

  return (
    <form onSubmit={login}>
      <input
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button>Login</button>
    </form>
  );
}