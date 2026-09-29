"use client";

import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@/components/icons";

type Props = {
  id: string;
  label: string;
  autoComplete: "current-password" | "new-password";
  placeholder?: string;
  minLength?: number;
};

export function PasswordField({ id, label, autoComplete, placeholder, minLength }: Props) {
  const [show, setShow] = useState(false);
  return (
    <label htmlFor={id}>
      {label}
      <span className="password-field">
        <input
          id={id}
          name="password"
          type={show ? "text" : "password"}
          autoComplete={autoComplete}
          placeholder={placeholder}
          minLength={minLength}
          required
        />
        <button
          type="button"
          className="password-toggle"
          onClick={() => setShow((s) => !s)}
          aria-label={show ? "Hide password" : "Show password"}
          aria-pressed={show}
          tabIndex={-1}
        >
          {show ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      </span>
    </label>
  );
}
