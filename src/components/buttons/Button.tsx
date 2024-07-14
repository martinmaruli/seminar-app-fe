"use client"
import clsx from "clsx";
import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode,
  fullWidth?: boolean,
}

const Button = (props: Readonly<ButtonProps>) => {
  const { children, fullWidth, className, ...restProps } = props;
  return (
    <button
      type='button'
      className={clsx(
        "bg-blue-400 font-semibold min-h-10 min-w-20 px-3 disabled:bg-gray-300",
        { "w-full": fullWidth },
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default React.memo(Button);