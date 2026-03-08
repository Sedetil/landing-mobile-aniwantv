import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const LegalDocs = () => {
    return (
        <div className="min-h-screen bg-[#121212] font-sans text-gray-300 pt-20 pb-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header / Navigation */}
                <div className="flex items-center justify-between mb-8">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-white hover:text-red-500 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Kembali ke Beranda</span>
                    </Link>
                </div>

                <div className="space-y-12">
                    {/* Privacy Policy Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <div className="text-center mb-10">
                            <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
                            <p className="text-gray-400">Last updated: 2026</p>
                        </div>

                        <Section title="1. Data Collection & Usage">
                            <p>We collect specific data to provide and improve our streaming service:</p>
                            <ul className="list-disc pl-5 space-y-2 mt-2">
                                <li><strong className="text-white">Personal Information:</strong> When you sign in using Google or Facebook, we collect basic profile information (name, email, profile picture) to create your account.</li>
                                <li><strong className="text-white">Device Information:</strong> Model, OS version, and unique device identifiers to optimize video playback and app performance.</li>
                                <li><strong className="text-white">Storage Access:</strong> We request access to your device's storage to download anime episodes and manage cached video files for offline viewing.</li>
                            </ul>
                        </Section>

                        <Section title="2. Third-Party Services">
                            <p>We use trusted third-party services that process data according to their own policies:</p>
                            <ul className="list-disc pl-5 space-y-2 mt-2">
                                <li><strong className="text-white">Google AdMob:</strong> To display relevant advertisements. AdMob may use device identifiers and cookies to personalize ads.</li>
                                <li><strong className="text-white">Firebase (Google):</strong>
                                    <ul className="list-circle pl-5 mt-1 space-y-1 text-gray-400">
                                        <li><em>Authentication:</em> To manage secure user logins.</li>
                                        <li><em>Analytics & Crashlytics:</em> To analyze app usage trends and monitor stability.</li>
                                    </ul>
                                </li>
                                <li><strong className="text-white">Facebook Audience Network:</strong> Used for authentication and potentially advertising.</li>
                            </ul>
                        </Section>

                        <Section title="3. App Permissions">
                            <p>The app requires the following permissions to function correctly:</p>
                            <ul className="list-disc pl-5 space-y-2 mt-2">
                                <li><strong className="text-white">Internet:</strong> To stream video content and load data.</li>
                                <li><strong className="text-white">Storage (Read/Write):</strong> To save downloaded episodes and cache images/videos.</li>
                                <li><strong className="text-white">Install Packages:</strong> Used for in-app updates (if applicable).</li>
                            </ul>
                        </Section>
                    </motion.div>

                    {/* Divider */}
                    <div className="border-t border-white/10 my-12"></div>

                    {/* Terms of Service Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="text-center mb-10">
                            <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
                            <p className="text-gray-400">Please read carefully before using AniWanTV</p>
                        </div>

                        <Section title="1. Content & Copyright">
                            <p><strong className="text-white">AniWanTV is a content aggregator.</strong> We do not host, upload, or manage any video files on our servers.</p>
                            <p className="mt-2">All content is scraped from third-party sources. We act as a search engine/browser for publicly available anime content. If you believe your copyright is being infringed, please contact the original source file host.</p>
                        </Section>

                        <Section title="2. User Conduct">
                            <p>By using AniWanTV, you agree NOT to:</p>
                            <ul className="list-disc pl-5 space-y-2 mt-2">
                                <li>Use the app for any illegal purposes.</li>
                                <li>Attempt to bypass or hack any app features or security measures.</li>
                                <li>Harass other users in comments or community features.</li>
                            </ul>
                            <p className="mt-2">We reserve the right to ban users who violate these rules.</p>
                        </Section>

                        <Section title="3. Ads & Monetization">
                            <p>This app is supported by advertisements (Google AdMob). By using the app, you agree to see occasional banner or interstitial ads. These help cover our server and maintenance costs.</p>
                        </Section>

                        <Section title="4. Changes to Terms">
                            <p>We may update these terms at any time. Continued use of the app after changes constitutes acceptance of the new terms.</p>
                        </Section>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

const Section = ({ title, children }) => (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-colors">
        <h2 className="text-xl font-bold text-red-500 mb-4">{title}</h2>
        <div className="text-gray-300 leading-relaxed space-y-2">
            {children}
        </div>
    </div>
);

export default LegalDocs;
