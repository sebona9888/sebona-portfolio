import React from 'react';
import About from './components/About';
import Projects from './Projects';
import './index.css';

function App() {
  return (
    <div className="portfolio-app min-h-screen bg-[#030712] text-white relative select-none selection:bg-cyan-500/30 selection:text-cyan-200">

      {/* Premium Ambient Light Spheres */}
      <div className="bg-animation">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Cyber Grid Background Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293703_1px,transparent_1px),linear-gradient(to_bottom,#1f293703_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0"></div>

      {/* Cinematic Sticky Navbar */}
      <nav className="portfolio-nav">
        <div className="text-xl md:text-2xl font-black tracking-tighter text-white hover:scale-[1.02] transition-transform cursor-pointer">
          Sebona<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Haile</span>
        </div>
        <div className="flex gap-8 md:gap-12 font-medium tracking-wide text-sm uppercase">
          <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 relative shortcut-link">About</a>
          <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 relative shortcut-link">Projects</a>
        </div>
      </nav>

      {/* Master Display Node - pb-32 akka footer-iin gadi fagaatee mul'atu taasisa */}
      <main className="relative z-10 flex flex-col items-center justify-center w-full px-4 md:px-8 space-y-16 md:space-y-24 mt-10 pb-32">
        <About />
        <Projects />
      </main>

      {/* FOOTER - Bal'ina dabalataa (pb-24, pt-16) fi ifaa (text-gray-300) kenneefira */}
      <footer className="relative z-20 w-full text-center pt-16 pb-24 mt-24 border-t border-gray-900/80 bg-[#030712] text-gray-300 text-xs tracking-widest uppercase">

        {/* Contact Badges */}
        <div className="max-w-xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 mb-10 normal-case font-medium tracking-normal text-sm px-4">

          <a
            href="mailto:sebonahaile9888@gmail.com"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 text-gray-300 hover:text-cyan-400 transition-all duration-300 group bg-gray-950/80 px-5 py-3 rounded-xl border border-gray-800/80 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
          >
            <span className="text-base group-hover:scale-110 transition-transform">✉️</span>
            <span className="font-sans">sebonahaile9888@gmail.com</span>
          </a>

          <a
            href="tel:+251988888888"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 text-gray-300 hover:text-cyan-400 transition-all duration-300 group bg-gray-950/80 px-5 py-3 rounded-xl border border-gray-800/80 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
          >
            <span className="text-base group-hover:scale-110 transition-transform">📞</span>
            <span className="font-sans">+251 902989488</span>
          </a>

        </div>

        {/* Amma barruun kun ifaa dha, dubbisuufis ni mul'ata */}
        <p className="px-4 text-[12px] text-gray-400 font-semibold block tracking-wider">
          © 2026 Sebona Haile • Engineered with Precision
        </p>
      </footer>
    </div>
  );
}

export default App;