// src/app/trips/page.tsx

"use client"; // Required for animations

import TripCard from "@/components/TripCard";
import { trips } from "@/lib/data";
import { motion } from 'framer-motion'; // Import motion for animations

export default function TripsPage() {
  return (
    <main 
      style={{ 
        backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2474')",
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Hero Section */}
      <section 
        className="h-[60vh] text-white flex flex-col justify-center items-center text-center px-4"
      >
        <motion.h1 
          className="text-7xl font-lora"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Expeditions
        </motion.h1>
        <motion.p 
          className="text-lg mt-4 max-w-2xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Join our expert guides on a once-in-a-lifetime journey to the world's most stunning butterfly habitats.
        </motion.p>
      </section>

      {/* Trip Packages Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl font-lora text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Available Packages
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trips.map((trip) => (
              <TripCard 
                key={trip.id}
                title={trip.title}
                location={trip.location}
                duration={trip.duration}
                imageUrl={trip.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}