export default function ContactPage() {
  return (
    <main>
     

      {/* Konten Utama Halaman Kontak */}
      <div className="py-16 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Get In Touch</h1>
          <p className="text-lg mt-4 text-gray-600">
            Have questions about our trips or want to inquire about a private tour? Reach out to us!
          </p>
        </div>

        {/* Wadah untuk form dan info kontak */}
        <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* Sisi Kiri: Form Kontak */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 hover:scale-105">
                Send Message
              </button>
            </div>
          </form>

          {/* Sisi Kanan: Info Kontak */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600"><a href="mailto:contact@wingspansanctuary.com" className="text-green-600 hover:underline">contact@wingspansanctuary.com</a></p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Based In</h3>
              <p className="text-gray-600">Jakarta, Indonesia</p>
              <p className="text-gray-600">Serving photography trips across the archipelago.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Follow Us</h3>
              <div className="flex space-x-4 mt-2">
                {/* Nanti kita isi link social media di sini */}
                <a href="#" className="text-gray-500 hover:text-green-600">Instagram</a>
                <a href="#" className="text-gray-500 hover:text-green-600">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </div>


    </main>
  );
}