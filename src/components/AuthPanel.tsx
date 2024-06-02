import AuthForm from "./AuthForm";


export default function AuthPanel() {
  return (
    <div>
      {/* <button onClick={() => console.log('login')}>Login</button>
      <button onClick={() => console.log('register')}>Register</button>*/}
        <div className="w-full flex justify-center p-6 pt-28 md:pt-40">
          <AuthForm /> 
        </div>
    </div>
  )
}