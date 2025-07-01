
export default function Home() {
  return (
    <main>



    {/* Hero Section */}
    <section 
      className="h-[70vh] bg-cover bg-center text-white flex flex-col justify-center items-center text-center px-4"
      style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2474')" }}
    >
      <h1 className="text-5xl font-bold">Photography Expeditions</h1>
     <p className="text-lg mt-4 max-w-2xl">Join us on a guided tour to capture the stunning biodiversity of Indonesia.</p>
      <a href="/contact" className="mt-8 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 hover:scale-105">
        View Trip Schedules
      </a>
    </section>

    {/* Konten Unggulan */}
    <div className="text-center py-20 px-4">
  <h2 className="text-3xl font-bold">Our Trip Packages</h2>
  <p className="text-lg mt-4 text-gray-600 max-w-2xl mx-auto">
    Detailed itineraries, dates, and pricing will be announced soon. Please contact us for private tour inquiries.
  </p>
</div>



    </main>
  );
}
