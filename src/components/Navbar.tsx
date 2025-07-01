// src/components/Navbar.tsx

import Link from 'next/link';

export default function Navbar() {
  return (
    // We change the background, remove the shadow, add blur and a border,
    // and update text colors to be visible on a dark background.
    <nav className="bg-black/30 backdrop-blur-lg p-4 flex justify-between items-center sticky top-0 z-50 border-b border-white/20">
      <div className="text-xl font-bold text-white">
        <Link href="/">Wingspan Sanctuary</Link>
      </div>
      <ul className="flex space-x-6 font-semibold">
        <li><Link href="/" className="text-gray-200 hover:text-white">Home</Link></li>
        <li><Link href="/catalog" className="text-gray-200 hover:text-white">Catalog</Link></li>
        <li><Link href="/trips" className="text-gray-200 hover:text-white">Trips</Link></li>
        <li><Link href="/contact" className="text-gray-200 hover:text-white">Contact</Link></li>
      </ul>
    </nav>
  );
}