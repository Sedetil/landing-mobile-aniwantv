import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Download, Zap, BookOpen, History, Layers } from 'lucide-react';

const features = [
    {
        icon: <Zap className="w-6 h-6 text-yellow-400" />,
        title: "Streaming HD",
        desc: "Nikmati anime favoritmu dengan kualitas 1080p dan 4K yang memukau tanpa buffering."
    },
    {
        icon: <BookOpen className="w-6 h-6 text-blue-400" />,
        title: "Perpustakaan Manga Besar",
        desc: "Baca ribuan chapter manga dan manhwa yang diperbarui setiap hari. Mode baca horizontal atau vertikal."
    },
    {
        icon: <Download className="w-6 h-6 text-green-400" />,
        title: "Mode Offline",
        desc: "Download episode dan chapter ke perangkatmu. Tonton dan baca di mana saja tanpa kuota."
    },
    {
        icon: <History className="w-6 h-6 text-purple-400" />,
        title: "Sinkronisasi Riwayat",
        desc: "Jangan pernah kehilangan jejak. Progresmu disinkronkan secara otomatis di semua perangkat."
    }
];

const FeatureGrid = () => {
    return (
        <section className="py-24 bg-[#121212] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Fitur Premium, <span className="text-red-600">Akses Gratis</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        AniWanTV menyatukan yang terbaik dari kedua dunia.
                        Ekosistem hiburan lengkap dalam genggamanmu.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-red-500/30 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureGrid;
