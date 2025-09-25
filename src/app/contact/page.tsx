"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Pesan berhasil di-console.log!");
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Nama"
          className="w-full p-2 border rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          placeholder="Pesan"
          className="w-full p-2 border rounded"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Kirim
        </button>
      </form>

      <div className="text-center mt-6 space-x-4">
        <a href="https://github.com/username" target="_blank" className="text-blue-600 hover:underline">GitHub</a>
        <a href="https://instagram.com/username" target="_blank" className="text-pink-600 hover:underline">Instagram</a>
      </div>
    </section>
  );
}
