import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import CourtContent from "@/components/CourtContent"
import Background from "@/components/Background"

export default function rozpisHrist(){
    return(
        <>
        <title>Turnaj | Rozpis Hřišť</title>
        <Navbar />
        <Header />
        <CourtContent />
        <Footer />
        <Background />
        </>
    )
}