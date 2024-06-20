
import Image from 'next/image'

export default function CourtContent(){
    return(
        <>
            <div className="w-full flex justify-center my-12">
             <Image
                src="/rozpis_hrist.png"
                width={500}
                height={500}
                alt="Picture of the author"
            />
            </div>
        
        </>
    )
}