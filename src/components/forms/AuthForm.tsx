import React from "react";
import Button from "../buttons/Button";
import TextField from "../fields/TextField";

interface AuthFormProps {
  variant: "register" | "login",
}

const AuthForm = (props: Readonly<AuthFormProps>) => {
  const { variant } = props;
  return (
    <form className='w-1/3 flex flex-col items-center gap-5'>
      <TextField name='username' label='User Name' />
      <TextField name='password' label='Password' type='password' />
      {variant === "register" && (
        <TextField
          name='confirm_password'
          label='Confirm Password'
          type='password'
        />
      )}
      <Button fullWidth className='mt-6'>
        {variant.toUpperCase()}
      </Button>
    </form>
  );
}

export default React.memo(AuthForm);
