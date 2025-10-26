"use client";

import { useState } from "react";
import { FiLoader, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

type FormState = {
  status: "idle" | "loading" | "success" | "error";
  message: string | null;
};

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<FormState>({ status: "idle", message: null });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ status: "loading", message: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "エラーが発生しました。");
      }

      setFormState({ status: "success", message: data.message });
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "不明なエラーが発生しました。";
      setFormState({ status: "error", message: errorMessage });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="mb-2 block font-semibold">
          お名前
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full rounded-md border bg-input px-4 py-2 focus:border-ring focus:ring-ring"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block font-semibold">
          メールアドレス
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-md border bg-input px-4 py-2 focus:border-ring focus:ring-ring"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block font-semibold">
          お問い合わせ内容
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full rounded-md border bg-input px-4 py-2 focus:border-ring focus:ring-ring"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={formState.status === "loading"}
        className="flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 font-bold text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {formState.status === "loading" ? (
          <FiLoader className="animate-spin" />
        ) : (
          "送信する"
        )}
      </button>

      {formState.status === "success" && (
        <div className="mt-4 flex items-center rounded-md bg-green-500/20 p-4 text-green-400">
          <FiCheckCircle className="mr-2" />
          <p>{formState.message}</p>
        </div>
      )}
      {formState.status === "error" && (
        <div className="mt-4 flex items-center rounded-md bg-red-500/20 p-4 text-red-400">
          <FiAlertCircle className="mr-2" />
          <p>{formState.message}</p>
        </div>
      )}
    </form>
  );
}
