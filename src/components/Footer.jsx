import React from "react";

function Footer() {
  return (
    <footer className="py-12 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Prerna. All rights reserved.
        </p>
        <div className="flex gap-8 text-gray-500 text-sm">
          <a href="#" className="hover:text-purple-500 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-purple-500 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

