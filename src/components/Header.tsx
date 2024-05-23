import "./css/header.css"

export default function Header(){
    return(
        <>
            <img className="absolute w-10 m-4 md:w-32 md:m-10 right-0" src="/spse_logo.webp" alt="" />
            <header className="w-full flex justify-center items-center h-52 md:h-[550px]">
                <h1 className="text-4xl md:text-8xl font-bold">GO<span className="text-lime-800 antialiased">LETO</span>.</h1>
            </header>
        </>
    )
}