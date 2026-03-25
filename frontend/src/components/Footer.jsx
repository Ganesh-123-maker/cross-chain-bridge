import React from "react";

function Footer() {
  return (
    <footer className="w-full border-t border-white/5 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#8896b0]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold">
            ⇅
          </div>
          <span className="font-semibold text-white">
            Bridge Swap
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="hover:text-white transition-colors"
          >
            Docs
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors"
          >
            Support
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors"
          >
            Privacy
          </a>
        </div>
        <div className="text-xs text-[#6b7a99]">
          © {new Date().getFullYear()} Bridge Swap
        </div>
      </div>
    </footer>
  );
}

export default Footer;