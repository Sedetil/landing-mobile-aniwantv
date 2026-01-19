import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Twitter, Github } from 'lucide-react';

const menuLinks = [
    { title: "Home", path: "/" },
    { title: "Privacy Policy", path: "/privacy" },
    { title: "Terms of Service", path: "/terms" },
];

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVars = {
        initial: { x: '100%' },
        animate: {
            x: 0,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            x: '100%',
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
        }
    };

    const linkVars = {
        initial: { y: "30vh", transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] } },
        open: { y: 0, transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] } }
    };

    const containerVars = {
        initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
        open: { transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 } }
    };

    return (
        <>
            {/* Trigger Button */}
            <div
                onClick={toggleMenu}
                className="relative z-50 w-[100px] h-10 cursor-pointer overflow-hidden rounded-full shadow-lg"
            >
                <div className="relative w-full h-full">
                    <motion.div
                        className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 to-red-500 flex items-center justify-center text-white font-bold"
                        animate={{ top: isOpen ? "-100%" : "0" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        Menu
                    </motion.div>
                    <motion.div
                        className="absolute inset-0 w-full h-full bg-black flex items-center justify-center text-white font-bold"
                        animate={{ top: isOpen ? "0" : "100%" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        Close
                    </motion.div>
                </div>
            </div>

            {/* Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed top-0 right-0 h-screen w-[70vw] md:w-[480px] bg-black z-40 p-10 flex flex-col justify-between rounded-l-3xl shadow-2xl border-l border-white/10"
                    >
                        <div className="flex flex-col gap-8 mt-20">
                            <motion.div
                                variants={containerVars}
                                initial="initial"
                                animate="open"
                                exit="initial"
                                className="flex flex-col gap-4"
                            >
                                {menuLinks.map((link, index) => (
                                    <div key={index} className="overflow-hidden">
                                        <motion.div variants={linkVars}>
                                            <Link
                                                to={link.path}
                                                onClick={toggleMenu}
                                                className="group flex items-center justify-between text-2xl sm:text-4xl md:text-5xl font-bold text-white hover:text-gray-300 transition-colors"
                                            >
                                                <span>{link.title}</span>
                                                <ArrowRight className="w-6 h-6 md:w-10 md:h-10 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 transform" />
                                            </Link>
                                        </motion.div>
                                    </div>
                                ))}
                                <div className="overflow-hidden">
                                    <motion.div variants={linkVars}>
                                        <a
                                            href="mailto:support@aniwan.tv"
                                            className="group flex items-center justify-between text-2xl sm:text-4xl md:text-5xl font-bold text-white hover:text-gray-300 transition-colors"
                                        >
                                            <span>Support</span>
                                            <ArrowRight className="w-6 h-6 md:w-10 md:h-10 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 transform" />
                                        </a>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Social Links Footer */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
                            className="flex flex-wrap gap-4 pt-10 border-t border-white/10"
                        >
                            <a href="#" className="w-[45%] text-gray-400 hover:text-white transition-colors text-lg flex items-center gap-2">
                                <Twitter className="w-5 h-5" /> Twitter
                            </a>
                            <a href="#" className="w-[45%] text-gray-400 hover:text-white transition-colors text-lg flex items-center gap-2">
                                <Instagram className="w-5 h-5" /> Instagram
                            </a>
                            <a href="#" className="w-[45%] text-gray-400 hover:text-white transition-colors text-lg flex items-center gap-2">
                                <Github className="w-5 h-5" /> Github
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default HamburgerMenu;
