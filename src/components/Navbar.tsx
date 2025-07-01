// src/components/Navbar.tsx

"use client"; // Required to use state and handle clicks

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-black/30 backdrop-blur-lg p-4 flex justify-between items-center sticky top-0 z-50 border-b border-white/20">
        <div className="text-xl font-bold text-white">
          <Link href="/" onClick={() => setIsOpen(false)}>Wingspan Sanctuary</Link>
        </div>

        {/* Desktop Menu Links */}
        <ul className="hidden md:flex space-x-6 font-semibold">
          <li><Link href="/" className="text-gray-200 hover:text-white">Home</Link></li>
          <li><Link href="/catalog" className="text-gray-200 hover:text-white">Catalog</Link></li>
          <li><Link href="/trips" className="text-gray-200 hover:text-white">Trips</Link></li>
          <li><Link href="/contact" className="text-gray-200 hover:text-white">Contact</Link></li>
        </ul>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <div className="w-6 h-1 bg-white mb-1"></div>
            <div className="w-6 h-1 bg-white mb-1"></div>
            <div className="w-6 h-1 bg-white"></div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-95 z-40 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)} className="text-white text-4xl">&times;</button>
        </div>
        <ul className="flex flex-col items-center justify-center h-full space-y-8">
          <li><Link href="/" onClick={() => setIsOpen(false)} className="text-3xl font-lora text-white">Home</Link></li>
          <li><Link href="/catalog" onClick={() => setIsOpen(false)} className="text-3xl font-lora text-white">Catalog</Link></li>
          <li><Link href="/trips" onClick={() => setIsOpen(false)} className="text-3xl font-lora text-white">Trips</Link></li>
          <li><Link href="/contact" onClick={() => setIsOpen(false)} className="text-3xl font-lora text-white">Contact</Link></li>
        </ul>
      </div>
    </>
  );
}
