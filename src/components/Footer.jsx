import React from 'react';
import { Github, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black/40 backdrop-blur-md border-t border-white/5 py-12 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Link to="/" className="text-xl font-bold text-red-600">AniWanTV</Link>
                        <span className="text-gray-500 text-sm">© 2026</span>
                    </div>

                    <div className="flex gap-6 text-sm text-gray-400">
                        <Link to="/legal" className="hover:text-red-500 transition-colors">Kebijakan Privasi & Syarat Layanan</Link>
                        <a href="mailto:support@aniwan.tv" className="hover:text-red-500 transition-colors">Bantuan</a>
                    </div>

                    <div className="flex gap-4">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
