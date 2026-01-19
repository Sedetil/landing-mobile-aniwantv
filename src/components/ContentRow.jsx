import React from 'react';
import { ChevronRight } from 'lucide-react';

const ContentRow = ({ title, items, isManga = false }) => {
    return (
        <div className="py-8 px-4 sm:px-6 lg:px-12">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2 group cursor-pointer">
                    {title}
                    <ChevronRight className="w-5 h-5 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                </h2>
                <span className="text-sm text-gray-400 hover:text-white cursor-pointer transition-colors">View All</span>
            </div>

            <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex-none w-[160px] md:w-[220px] snap-start group relative"
                    >
                        <div className="aspect-[2/3] rounded-xl overflow-hidden bg-gray-800 relative cursor-pointer shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:z-10 ring-1 ring-white/5 mx-1 my-1">
                            {/* Image Placeholder */}
                            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-gray-500">
                                {/* In real app, img tag here */}
                                <span className="text-xs">{item.title} Cover</span>
                            </div>
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                                <button className="bg-red-600 text-white rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                </button>
                            </div>

                            {/* Badges */}
                            {isManga && (
                                <div className="absolute top-2 left-2">
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded shadow ${item.type === 'MANHWA' ? 'bg-blue-600' : 'bg-red-600'} text-white`}>
                                        {item.type || 'MANGA'}
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="mt-3 px-1">
                            <h3 className="text-white text-sm font-semibold truncate group-hover:text-red-500 transition-colors">{item.title}</h3>
                            <p className="text-gray-400 text-xs mt-1">{item.subtitle}</p>
                            {/* Progress bar for continue watching */}
                            {item.progress && (
                                <div className="mt-2 h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-red-600" style={{ width: `${item.progress}%` }}></div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContentRow;
