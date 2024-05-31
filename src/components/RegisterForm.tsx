export default function RegisterForm() {
  return (
    <>
      <label htmlFor="name">Křestní jméno</label>
      <input type="text" name="first_name" placeholder="Prokop" />
      <label htmlFor="name">Přijmení</label>
      <input type="text" name="last_name" placeholder="Dveře" />
      <label htmlFor="password">Heslo</label>
      <input type="password" name="password" placeholder="123456" />
      <label htmlFor="confirm_password">Potvrzení hesla</label>
      <input type="password" name="confirm_password" placeholder="123456" />
    </>
  )
}