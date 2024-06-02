import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AdminPanel from "@/components/AdminPanel";
import AuthPanel from "@/components/AuthPanel";

export default function Admin() {

  const loggedIn = false;

  return (
    <>
      <Navbar />
      { loggedIn ? <AdminPanel /> : <AuthPanel />}
      <Footer />
      <Background />
    </>
  )
}