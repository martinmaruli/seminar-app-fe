import { ReactNode } from "react";

export default function AuthLayout({children}: Readonly<{children: ReactNode}>) {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">{children}</main>
  )
}