import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const questions = [
    {
        question: "Apakah AniWanTV gratis?",
        answer: "Ya! AniWanTV menawarkan akses gratis dengan iklan. Untuk pengalaman tanpa iklan dan download offline, kamu bisa upgrade ke Premium."
    },
    {
        question: "Bisakah saya download anime untuk ditonton offline?",
        answer: "Tentu saja. Dengan aplikasi mobile kami, kamu bisa download episode dan chapter manga ke perangkatmu dan menikmatinya kapan saja, di mana saja, tanpa koneksi internet."
    },
    {
        question: "Apakah progres saya disinkronkan antar perangkat?",
        answer: "Ya. Cukup login dengan akunmu, dan riwayat tontonan, favorit, serta progres bacaan akan otomatis tersinkronisasi antara HP, tablet, dan web."
    },
    {
        question: "Apa perbedaan Anime dan Manga di aplikasi?",
        answer: "AniWanTV adalah platform hybrid. Kamu bisa beralih dengan mulus antara menonton episode anime terbaru dan membaca chapter manga sumbernya dalam satu aplikasi yang sama."
    }
];

const FaqItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <motion.div
            initial={false}
            className={`border-b border-white/10 last:border-none overflow-hidden ${isOpen ? 'bg-white/5' : 'bg-transparent'} transition-colors duration-300`}
        >
            <button
                onClick={onClick}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
            >
                <span className={`text-lg font-medium pr-8 transition-colors ${isOpen ? 'text-red-500' : 'text-gray-200 group-hover:text-white'}`}>
                    {question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-red-500' : 'text-gray-400'}`} />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#121212] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-3xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-red-500 text-sm font-medium mb-4">
                        <HelpCircle className="w-4 h-4" />
                        <span>Bantuan</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Pertanyaan Umum
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Segala hal yang perlu kamu ketahui tentang AniWanTV.
                    </p>
                </div>

                <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-xl overflow-hidden">
                    {questions.map((q, i) => (
                        <FaqItem
                            key={i}
                            question={q.question}
                            answer={q.answer}
                            isOpen={openIndex === i}
                            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
