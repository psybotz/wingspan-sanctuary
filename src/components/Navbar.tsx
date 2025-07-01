export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-xl font-bold text-green-700">
        <a href="/">Wingspan Sanctuary</a>
      </div>
      <ul className="flex space-x-6 font-semibold">
        <li><a href="/" className="text-gray-700 hover:text-green-700">Home</a></li>
        <li><a href="/catalog" className="text-gray-700 hover:text-green-700">Catalog</a></li>
        <li><a href="/trips" className="text-gray-700 hover:text-green-700">Trips</a></li>
        <li><a href="/contact" className="text-gray-700 hover:text-green-700">Contact</a></li>
      </ul>
    </nav>
    );
}