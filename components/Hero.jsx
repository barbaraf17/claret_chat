"use client";

import { delay, stagger } from "framer-motion";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import Quotes from "./Quotes";

export default function Hero() {
    const [titleLine, titleLineAnimate] = useAnimate();
    const [title, titleAnimate] = useAnimate();
    const [content, contentAnimate] = useAnimate();
    const [claretTagline,claretTaglineAnimate] = useAnimate();

    useEffect(() => {
        const animate = async () => {
            await titleLineAnimate(titleLine.current, 
                { width: "100%" }, 
                { duration: 1, type: "spring", ease: "easeIn" }
            );
            await titleAnimate("span", 
                { y: 0, opacity: 1 }, 
                { delay: stagger(0.1), duration: 0.5 }
            );

            await claretTaglineAnimate("div",
                {y : 0,opacity : 1},
                {duration : 0.4, delay : stagger(0.1), ease : "easeOut"}
            )
            
            await contentAnimate(content.current,
                { opacity: 1, y: 0 },
                { duration: 0.8, delay: 0.5 }
            );


        };

        animate();
    }, []);

    return (
        <section className="relative min-h-[100dvh] w-[100dvw] overflow-hidden bg-gradient-to-bl lg:bg-gradient-to-br from-[#eba1c2] via-[#f8fcff] to-[#b18deb] backdrop-blur-3xl">
            {/* Animated background elements */}
            {/* <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div> */}

            {/* Decorative elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center gap-12 py-20">
                {/* Main content */}
                <div className="flex flex-col items-center gap-8">
                    {/* Logo and Title */}
                    <div className="relative flex items-center gap-6">
                        <div className="relative w-24 h-24">
                            <Image 
                                src="/cats12-Photoroom.png" 
                                alt="Mental Health Support" 
                                fill
                                className="object-contain drop-shadow-lg"
                                priority
                            />
                        </div>
                        <div ref={title} className="flex flex-row gap-2 text-6xl md:text-7xl font-bold overflow-hidden">
                            <motion.span
                                whileHover={{y : -20}}
                                animate={{ y : 0}}
                                className="text-[#86a4c2] hover:cursor-default"
                            >C</motion.span>
                            <motion.span 
                                whileHover={{y : -20}}
                                animate={{ y : 0}}
                                className="text-[#86a4c2] hover:cursor-default"
                            >A</motion.span>
                            <motion.span 
                                whileHover={{y : -20}}
                                animate={{ y : 0}}
                                className="text-[#86a4c2] hover:cursor-default"
                            >R</motion.span>
                            <motion.span 
                                whileHover={{y : -20}}
                                animate={{ y : 0}}
                                className="text-[#86a4c2] hover:cursor-default"
                            >E</motion.span>
                        </div>
                        <motion.div ref={titleLine}
                            initial={{ width: 0 }}
                            className="h-1 absolute bottom-0 left-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                        />
                    </div>


                    <div 
                    ref={claretTagline}
                    className="w-[100dvw] h-auto flex flex-wrap justify-center items-center gap-2 lg:gap-5 px-3 py-5 overflow-hidden">
                        {['Claret','Centre','For','Mental','Well-Being'].map((term,idx) => {
                            return <motion.div 
                            key={idx}
                            initial={{y : 100, opacity : 0}}
                            className="w-fit h-fit"
                            >
                                <p className="text-2xl md:text-3xl lg:text-6xl text-[#86a4c2] font-light">{term}</p>
                            </motion.div>
                        })}
                    </div>
                    
                    {/* Department Badge */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3}}
                        className="px-6 py-2 bg-white/90 backdrop-blur-sm rounded-full border-2 border-indigo-200 shadow-lg"
                    >
                        <p className="text-sm font-semibold text-indigo-900 tracking-wide">
                            Department of Psychology • St. Claret College, Autonomous
                        </p>
                    </motion.div>
                    
                    {/* Quote Section with Enhanced Styling */}
                    <div ref={content} className="max-w-[80dvw] md:max-w-2xl lg:max-w-3xl mt-3 lg:mt-8 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-5 lg:p-8 shadow-xl border-2 border-[#a8738b]">
                        <div className="flex items-center gap-4">
                            <div className="text-lg text-indigo-900 font-medium">
                                <Quotes />
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex gap-4 mt-4"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#services"
                            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-sm font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Our Services
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="px-8 py-3 bg-white text-indigo-600 rounded-full text-sm font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Contact Us
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}