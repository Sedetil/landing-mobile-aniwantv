import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Apple, Smartphone, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

import Aurora from './Aurora';

const screenshots = [
    "/app-screenshot.jpg",
    "/app-screenshot-1.jpg",
    "/app-screenshot-2.jpg",
    "/app-screenshot-3.jpg"
];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % screenshots.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#121212]">

            {/* Background Ambience */}
            <div className="absolute inset-0 z-0 opacity-50">
                <Aurora
                    colorStops={["#EF4444", "#F97316", "#7F1D1D"]}
                    blend={0.7}
                    amplitude={1.2}
                    speed={0.5}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content (Text) */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-white uppercase bg-gradient-to-r from-red-600 to-red-500 rounded-full shadow-lg shadow-red-900/30">
                                #1 Aplikasi Anime & Komik
                            </span>

                            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
                                <span className="whitespace-nowrap">Nonton Anime.</span> <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 whitespace-nowrap">
                                    Baca Komik.
                                </span>
                            </h1>

                            <p className="text-gray-400 text-lg lg:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Pengalaman hiburan terbaik di perangkat seluler Anda.
                                Perpustakaan tanpa batas, tonton mode offline, dan sinkronisasi otomatis di semua perangkat.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                {/* Google Play Button */}
                                <button className="flex items-center gap-3 bg-white text-black px-6 py-3.5 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl font-bold w-full sm:w-auto justify-center">
                                    <div className="fill-current">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" /></svg>
                                    </div>
                                    <div className="text-left">
                                        <div className="text-[10px] leading-3 opacity-60 uppercase font-semibold">Temukan di</div>
                                        <div className="text-sm leading-4">Google Play</div>
                                    </div>
                                </button>

                                {/* App Store Button */}
                                <button className="flex items-center gap-3 bg-white/10 text-white backdrop-blur-md border border-white/20 px-6 py-3.5 rounded-xl hover:bg-white/20 transition-all transform hover:scale-105 shadow-xl font-bold w-full sm:w-auto justify-center">
                                    <Apple className="w-7 h-7 fill-current" />
                                    <div className="text-left">
                                        <div className="text-[10px] leading-3 opacity-60 uppercase font-semibold">Download di</div>
                                        <div className="text-sm leading-4">App Store</div>
                                    </div>
                                </button>
                            </div>

                            <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-500">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#121212]" />
                                    ))}
                                </div>
                                <span>Bergabung dengan 1M+ Pengguna</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content (Phone Mockup) */}
                    <div className="flex-1 relative w-full flex justify-center lg:justify-end lg:pr-32 mt-12 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, y: 50, rotate: 10 }}
                            animate={{ opacity: 1, y: 0, rotate: -6 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative z-10"
                        >
                            {/* Phone Frame */}
                            <div className="relative w-[300px] h-[600px] border-[12px] border-black rounded-[50px] shadow-2xl bg-[#1a1a1a] overflow-hidden ring-1 ring-white/10">
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[30px] w-[150px] bg-black rounded-b-2xl z-20"></div>

                                {/* Screen Content Slideshow */}
                                <div className="w-full h-full relative">
                                    <AnimatePresence mode='wait'>
                                        <motion.img
                                            key={currentImageIndex}
                                            src={screenshots[currentImageIndex]}
                                            alt="App Screenshot"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="w-full h-full object-cover absolute inset-0"
                                        />
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
