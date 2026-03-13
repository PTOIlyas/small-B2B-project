"use client";

import { useState } from "react";

export default function CreateSupplier() {
  const [form, setForm] = useState({
    companyName: "",
    description: "",
    category: "",
    location: "",
    phone: "",
    email: "",
  });

  const submit = async (e: any) => {
    e.preventDefault();

    await fetch("/api/suppliers", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("Supplier created");
  };

  return (
    <form onSubmit={submit}>
      <input
        placeholder="Company Name"
        onChange={(e) =>
          setForm({ ...form, companyName: e.target.value })
        }
      />

      <input
        placeholder="Category"
        onChange={(e) =>
          setForm({ ...form, category: e.target.value })
        }
      />

      <input
        placeholder="Location"
        onChange={(e) =>
          setForm({ ...form, location: e.target.value })
        }
      />

      <input
        placeholder="Phone"
        onChange={(e) =>
          setForm({ ...form, phone: e.target.value })
        }
      />

      <input
        placeholder="Email"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <textarea
        placeholder="Description"
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
      />

      <button>Create Supplier</button>
    </form>
  );
}