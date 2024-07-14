"use client"
import clsx from "clsx";
import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react"

interface IconButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode,
}

const IconButton = (props: Readonly<IconButtonProps>) => {
  const { children, className, ...restProps } = props;
  return (
    <button
      type='button'
      className={clsx('text-2xl p-2 text-slate-950', className)}
      {...restProps}
    >
      {children}
    </button>
  )
}

export default React.memo(IconButton);