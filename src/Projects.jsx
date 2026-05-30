import React from 'react';

const Projects = () => {
    return (
        <section className="w-full max-w-4xl min-h-fit bg-transparent animate-fade-up pt-5" id="projects">

            {/* Clean Section Identifier */}
            <div className="flex flex-col items-center mb-10">
                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
                    Featured Engineering
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            </div>

            {/* Premium 3D Depth Card Container */}
            <div className="w-full bg-[#0b0f19]/60 backdrop-blur-2xl border border-gray-800/80 rounded-3xl overflow-hidden shadow-2xl hover:border-gray-700 hover:shadow-[0_0_25px_rgba(6,182,212,0.1)] transition-all duration-500 group">

                {/* Futuristic Card Top Banner */}
                <div className="p-6 md:p-8 bg-gradient-to-r from-cyan-950/20 via-blue-950/20 to-transparent border-b border-gray-800/60 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-cyan-950/50 rounded-2xl flex items-center justify-center border border-cyan-500/30 text-xl group-hover:rotate-12 transition-transform duration-300">
                            🍔
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
                                prime Burger
                            </h3>
                            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mt-1">
                                E-Commerce Enterprise System
                            </p>
                        </div>
                    </div>
                    <div className="hidden sm:block text-xs font-medium text-gray-500 bg-gray-900/60 px-3 py-1 rounded-md border border-gray-800">
                        Production Build
                    </div>
                </div>

                {/* Core Content Layout Block */}
                <div className="p-6 md:p-10">
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 font-normal">
                        A commercial high-performance food logistics and delivery platform built on the MERN engine.
                        Features highly advanced components including atomic JWT user authentication, dynamic role-mapped admin management command centers,
                        asynchronous multi-image upload processing, localized digital payment receipt checks, custom data filters, and smooth cross-device accessibility layouts.
                    </p>

                    {/* Technographic Badges */}
                    <div className="flex flex-wrap gap-2.5 mb-8">
                        {['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Cloudinary CDN', 'TailwindCSS'].map((tech) => (
                            <span
                                key={tech}
                                className="px-3.5 py-1.5 bg-gray-950/80 border border-gray-800/80 rounded-xl text-xs font-medium text-gray-400 hover:text-cyan-400 hover:border-cyan-900 transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="https://prime-burger.vercel.app"
                            target="_blank"
                            rel="noreferrer"
                            className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-gray-950 font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-cyan-500/20 text-xs md:text-sm tracking-wide flex items-center gap-2"
                        >
                            🌐 Launch Live System
                        </a>
                        <a
                            href="https://github.com/sebona9888/prime-burger"
                            target="_blank"
                            rel="noreferrer"
                            className="px-6 py-3.5 bg-transparent border border-gray-800 hover:border-gray-600 text-gray-300 hover:text-white font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 text-xs md:text-sm tracking-wide flex items-center gap-2"
                        >
                            💻 Inspect Source Code
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;