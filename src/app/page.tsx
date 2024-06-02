import Header from "@/components/Header"
import Footer from "@/components/Footer"
import InfoSection from "@/components/InfoSection"
import Background from "@/components/Background"
import Navbar from "@/components/Navbar"

export default function Home(){
  return(
    <>
      <Navbar />
      <Header />
      <InfoSection />
      <Footer />
      <Background />
    </>
  )
}