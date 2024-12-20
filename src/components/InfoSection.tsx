"use client";

import Link from 'next/link';
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

export default function InfoSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5
            }
        })
    };

    return (
        <section
            className="w-full flex justify-center p-8 flex-col mb-12 md:mb-2 md:p-36"
            ref={ref}
        >
            {[
                <h1 key="1" className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    <span className="text-blue-900">GOLETO</span> školní fotbalový turnaj <span className="text-lime-800">SPŠE</span>
                </h1>,
                <p key="2" className="leading-7">
                    který se koná 21.6.2024 od 8 hodin ráno.
                </p>,
                <p key="3" className="leading-7 [&:not(:first-child)]:mt-6">
                    Odehrávat se bude v tělocvičnách a na školních venkovních hřištích. Do turnaje se bude moci zapojit každá třída s maximálním počtem 10 hráčů v týmu + 2 náhradní hráči (náhradní hráči se účastní pouze v případě nepřítomnosti hráčů základní sestavy).
                </p>,
                <p key="4" className="text-lg font-semibold mt-6">POZOR!</p>,
                <p key="5" className="leading-7 [&:not(:first-child)]:mb-6">
                    Každá třída může vybírat hráče pouze ze své vlastní třídy a nesmí si půjčovat z jiných tříd.
                </p>,
                <p key="6" className="leading-7 [&:not(:first-child)]:mb-6">
                    Přihlásit se můžete přes třídní učitele nebo učitelky, kterým jsme zaslali email s přihlašovacím formulářem, tento formulář můžete vyplnit a podat pouze do 14. 6. 2024.
                </p>,
                <p key="7" className="text-lg font-semibold">Jak se bude hrát?</p>,
                <p key="8" className="leading-7 [&:not(:first-child)]:mb-6">
                    Hrát se bude fotbalový pavouk, což znamená, že pokud váš tým prohraje hned první zápas, tak už skončil a nikam se neposouvá, takže nám opravdu budete muset dokázat, co ve vás je.
                </p>,
                <p key="9" className="text-lg font-semibold">Losování</p>,
                <p key="10" className="leading-7 [&:not(:first-child)]:mb-6">
                    Losování pavouka proběhne 20.6. o velké přestávce v 9:45. Prosíme kapitány jednotlivých týmů, aby se dostavili do učebny 1101 a mohli si vylosovat soupeře pro první zápas. 
                </p>,
                <p key="11" className="leading-7 [&:not(:first-child)]:mb-6">
                    Těšíme se na Vás a doufáme že si to společně užijeme, sportu zdar a fotbalu obzvláště. 
                </p>,
                <p key="12" className="text-xl text-muted-foreground text-center mb-6 md:pt-12">
                    <strong>Pravidla</strong> naleznete v záložce <Link href="./pravidla" className="hover:text-slate-900">Pravidla</Link>.
                </p>
            ].map((child, i) => (
                <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={variants}
                >
                    {child}
                </motion.div>
            ))}
        </section>
    );
}
