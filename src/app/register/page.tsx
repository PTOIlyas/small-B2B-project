"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "buyer",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("User created");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="name"
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        placeholder="email"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="password"
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <select
        onChange={(e) =>
          setForm({ ...form, role: e.target.value })
        }
      >
        <option value="buyer">Buyer</option>
        <option value="supplier">Supplier</option>
      </select>

      <button type="submit">Register</button>
    </form>
  );
}