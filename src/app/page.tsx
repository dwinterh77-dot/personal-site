import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
        {/* Avatar */}
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-4xl font-bold mb-8">
          D
        </div>

        {/* Name & Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Deway
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-400 mb-12">
          第一次
        </p>

        {/* Social Links */}
        <div className="flex gap-4">
          <Link
            href="https://github.com/dwinterh77-dot"
            target="_blank"
            className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-all flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </Link>
          
          <Link
            href="mailto:dwinterh77@gmail.com"
            className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-all flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 animate-bounce">
          <svg className="w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-purple-400">#</span> About Me
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            第一次 — 这是一个关于开始的故事。探索技术世界，追求极致的体验。
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-purple-400">#</span> Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "Git", "Docker"].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-zinc-800 rounded-lg text-zinc-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-purple-400">#</span> Get In Touch
          </h2>
          <p className="text-zinc-400 mb-8">
            有想法？一起聊聊 🚀
          </p>
          <Link
            href="mailto:dwinterh77@gmail.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full font-semibold hover:opacity-90 transition-all"
          >
            联系我
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-zinc-500">
        <p>© 2026 Deway. All rights reserved.</p>
      </footer>
    </div>
  );
}
