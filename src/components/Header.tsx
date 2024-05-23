import "./css/header.css"

export default function Header(){
    return(
        <>
            <header className="w-full flex justify-center items-center h-52 md:h-[550px]">
                <h1 className="text-4xl md:text-8xl font-bold">GO<span className="text-lime-800 antialiased">LETO</span>.</h1>
            </header>
        </>
    )
}