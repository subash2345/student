"use client";

import { useState } from "react";

export default function CreateEmployee() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();

    await fetch("http://localhost:3001/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, position }),
    });

    alert("Employee created!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Employee</h1>

      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Position" value={position} onChange={e => setPosition(e.target.value)} />

      <button type="submit">Submit</button>
    </form>
  );
}
