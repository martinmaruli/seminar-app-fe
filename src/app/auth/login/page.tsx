import AuthForm from "@/components/forms/AuthForm";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <h1 className='text-2xl mb-8'>Login page</h1>
      <AuthForm variant='login' />
      <hr className='border-gray-100 w-1/3 my-10' />
      <p className='text-gray-100'>
        Belum punya akun?&nbsp;
        <Link
          className='font-semibold text-blue-300 hover:underline'
          href='/auth/register'
        >
          Buat Akun
        </Link>
      </p>
    </>
  );
}