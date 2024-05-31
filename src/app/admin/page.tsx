import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AdminPanel from "@/components/AdminPanel";
import AuthPanel from "@/components/AuthPanel";

export default function Admin() {

  const loggedIn = true;

  return (
    <>
      <Header />
      {loggedIn ? <AdminPanel /> : <AuthPanel />}
      <Footer />
      <Background />
    </>
  )
}