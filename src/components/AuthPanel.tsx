import AuthForm from "./AuthForm";


export default function AuthPanel() {
  return (
    <div>
      <button onClick={() => console.log('login')}>Login</button>
      <button onClick={() => console.log('register')}>Register</button>
      <AuthForm login />
    </div>
  )
}