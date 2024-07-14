"use client"

import clsx from "clsx";
import React, { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import IconButton from "../buttons/IconButton";

interface TextFieldProps {
  name: string;
  className?: string;
  inputClassName?: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "password" | "search";
}

const TextField = (props: Readonly<TextFieldProps>) => {
  const {
    className,
    name,
    inputClassName,
    label,
    placeholder,
    type = "text",
  } = props;

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const tooglePassword = () => setShowPassword((show) => !show);
  
  return (
    <div className={clsx("relative w-full", className)}>
      {label && <label htmlFor={`field-${name}`}>{label}</label>}
      <input
        id={`field-${name}`}
        className={clsx(
          "w-full min-h-10 text-gray-950 px-3",
          { "pr-10": type === "password" },
          inputClassName
        )}
        placeholder={placeholder}
        type={showPassword ? "text" : type}
      />
      {type === "password" && (
        <IconButton className='absolute end-px' onClick={tooglePassword}>
          {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
        </IconButton>
      )}
    </div>
  );
}

export default React.memo(TextField);
