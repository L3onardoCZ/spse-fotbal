import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

interface AuthFormProps {
  login: boolean;
}

export default function AuthForm(p: AuthFormProps) {
  return (
    <>
      {p.login ? <LoginForm /> : <RegisterForm />}
    </>
  )
}