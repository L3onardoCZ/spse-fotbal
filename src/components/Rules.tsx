import React from 'react';

export default function Rules() {
    return (
        <>
            <section className="w-full flex justify-center p-8 flex-col mb-12 md:mb-2 md:p-36">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
                    <span className="text-lime-800">Pravidla</span>
                </h1>
                
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>Hraje se 2x10 hrubého času (čas se nebude zastavovat při přerušení hry a autech)</li>
                    <li>Pokud se tým nedostaví do 5 minut od začátku zápasu je zápas kontumován a vyhrává druhý</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8">Pravidla pro zápasy v hale a venkovním horním hřišti (to blíže ke škole):</h2>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>Hráči ve hřišti – 4 hráči + brankář</li>
                    <li>Hraje se s futsalovým míčem</li>
                    <li>Hraje se na malé branky, které jsou v halách a na hřišti</li>
                    <li>Může se chytat rukama</li>
                    <li>Hraje se na auty a rohy</li>
                    <li>Auty a rohy se budou rozehrávat kopem</li>
                    <li>Střídat se může hokejově (hráč za hráče během hry)</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8">Pravidla pro zápasy na venkovním dolním hřišti (to dále od školy):</h2>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>Hráči ve hřišti – 4 hráči + brankář</li>
                    <li>Hraje se s futsalovým míčem</li>
                    <li>Hraje se na velké branky, které jsou na hřišti</li>
                    <li>Může se chytat rukama</li>
                    <li>Střídat se může hokejově (hráč za hráče během hry)</li>
                    <li>Hraje se o mantinely (z důvodu menšího hřiště a uzpůsobení branek a postranních čar na hřišti)</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8">Fauly:</h2>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>Při větším faulu stopka na 2 minuty pro hráče který fauloval</li>
                    <li>Při menším faulu rozehrává tým, který byl faulován z místa faulu</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8">Remíza:</h2>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>Při remíze po konci utkání budou rozhodovat o vítězi penalty</li>
                    <li>Každý tým bude kopat 5 penalt – při rovnosti gólů bude kopat každý tým po jedné penaltě (dokud jeden tým nedá gól a druhý dá)</li>
                    <li>
                        V hale
                        <ul className="ml-6 list-disc [&>li]:mt-2">
                            <li>Bude se kopat z půlky hřiště do prázdné brány</li>
                        </ul>
                    </li>
                    <li>
                        Hřiště venku
                        <ul className="ml-6 list-disc [&>li]:mt-2">
                            <li>Bude se kopat na brankáře z dálky na úrovni vápna</li>
                        </ul>
                    </li>
                </ul>
            </section>
        </>
    );
}