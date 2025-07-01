// src/components/Footer.tsx

import Link from 'next/link';

export default function Footer() {
  return (
    // We provide a solid bg-transparent as the default,
    // and then enhance it with glassmorphism for supported browsers.
    <footer className="bg-transparent text-white supports-[backdrop-filter]:bg-black/30 supports-[backdrop-filter]:backdrop-blur-lg border-t border-white/10">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-lora">Wingspan Sanctuary</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-300">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/catalog" className="hover:text-white">Catalog</Link>
            <Link href="/trips" className="hover:text-white">Trips</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>

          <div className="flex justify-center space-x-6 text-gray-300">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Facebook</a>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-sm text-gray-400">&copy; 2025 Wingspan Sanctuary. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
