import Link from 'next/link'; // Import the Link component

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-xl font-bold text-green-700">
        <Link href="/">Wingspan Sanctuary</Link>
      </div>
      <ul className="flex space-x-6 font-semibold">
        <li><Link href="/" className="text-gray-700 hover:text-green-700">Home</Link></li>
        <li><Link href="/catalog" className="text-gray-700 hover:text-green-700">Catalog</Link></li>
        <li><Link href="/trips" className="text-gray-700 hover:text-green-700">Trips</Link></li>
        <li><Link href="/contact" className="text-gray-700 hover:text-green-700">Contact</Link></li>
      </ul>
    </nav>
  );
}