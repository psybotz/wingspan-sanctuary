
export default function Home() {
  return (
    <main>


    {/* Hero Section */}
    <section 
      className="h-[70vh] bg-cover bg-center text-white flex flex-col justify-center items-center text-center px-4"
      style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2550')" }}
    >
      <h1 className="text-5xl font-bold">Explore Indonesia&apos;s Butterfly Haven</h1>
      <p className="text-lg mt-4 max-w-2xl">Guided insect photography expeditions in their pristine natural habitats.</p>
      <a href="/trips" className="mt-8 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 hover:scale-105">
        View Trip Schedules
      </a>
    </section>

    {/* Konten Unggulan */}
    <div className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-12">Featured Species</h2>
      <div className="inline-block bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ornithoptera.paradisea.arpal.m.jpg/1024px-Ornithoptera.paradisea.arpal.m.jpg" alt="Paradise Birdwing Butterfly" className="w-full max-w-sm mx-auto rounded-lg" />
        <h3 className="text-2xl font-bold mt-4"><a href="#">Ornithoptera paradisea</a></h3>
        <p className="mt-2 text-gray-600">Known as the Paradise Birdwing, found in New Guinea.</p>
        <a href="#" className="mt-4 inline-block bg-white text-green-600 border-2 border-green-600 font-bold py-2 px-5 rounded-lg hover:bg-green-600 hover:text-white transition-colors duration-300">
          View Details
        </a>
      </div>
    </div>

    
    </main>
  );
}
