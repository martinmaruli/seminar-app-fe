import AuthForm from "@/components/forms/AuthForm";
import Link from "next/link";

export default function Register() {
  return (
    <>
      <h1 className='text-2xl mb-8'>Register page</h1>
      <AuthForm variant='register' />
      <hr className='border-gray-100 w-1/3 my-10' />
      <p className='text-gray-100'>
        Sudah punya akun?&nbsp;
        <Link
          className='font-semibold text-blue-300 hover:underline'
          href='/auth/login'
        >
          Masuk
        </Link>
      </p>
    </>
  );
}