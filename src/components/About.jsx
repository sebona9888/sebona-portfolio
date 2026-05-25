import React from 'react';

const About = () => {
    return (
        <section className="w-full max-w-4xl min-h-fit flex items-center justify-center bg-transparent animate-fade-up pt-10" id="about">
            <div className="relative w-full bg-[#0b0f19]/70 backdrop-blur-2xl border border-gray-800/80 rounded-3xl p-8 md:p-14 shadow-[0_0_50px_rgba(0,0,0,0.6)] overflow-hidden group hover:border-cyan-500/30 transition-all duration-500">

                {/* Advanced Dynamic Glow Meshes */}
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] group-hover:bg-cyan-500/20 transition-all duration-700 animate-pulse"></div>
                <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] group-hover:bg-blue-600/20 transition-all duration-700 animate-pulse delay-75"></div>

                <div className="relative z-10 flex flex-col items-center text-center">

                    {/* Animated Intro Title */}
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
                        Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 bg-clip-text text-transparent drop-shadow-sm">Sebona Haile</span> 👋
                    </h1>

                    {/* Futuristic Glass Badge */}
                    <div className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 mb-8 bg-cyan-950/30 px-6 py-2 rounded-full border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                        Full-Stack Developer • MERN Stack Engineer
                    </div>

                    {/* Sleek Technical Copywriting */}
                    <div className="space-y-6 max-w-2xl text-gray-400 text-sm md:text-base leading-relaxed mb-10 text-justify md:text-center">
                        <p>
                            I am a Full-Stack Engineer specializing in the MERN ecosystem, dedicated to architecting scalable,
                            high-performance web applications wrapped in immersive, pixel-perfect user experiences.
                        </p>
                        <p>
                            Having deployed full-scale production frameworks like <span className="text-white font-semibold underline decoration-cyan-500/40 decoration-2 underline-offset-4">Odaa Construction Supply</span>,
                            enterprise portals like <span className="text-white font-semibold underline decoration-blue-500/40 decoration-2 underline-offset-4">Sadan Infrastructure PLC</span>, and enterprise data automation panels,
                            I anchor my workflow around robust database integrity, secure cryptographic authentication architectures, and scalable API design.
                        </p>
                    </div>

                    {/* Premium Interactive Technology Micro-Tags */}
                    <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
                        {['React', 'Node.js', 'MongoDB', 'Express', 'Cloudinary', 'RESTful APIs', 'Tailwind CSS'].map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2.5 bg-[#111827]/40 border border-gray-800 rounded-xl text-xs font-semibold tracking-wider text-gray-300 hover:border-cyan-400 hover:text-white hover:bg-gray-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(6,182,212,0.15)] cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;