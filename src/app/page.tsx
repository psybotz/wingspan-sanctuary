// src/app/page.tsx

"use client";

import Link from 'next/link';
import ButterflyCard from '@/components/ButterflyCard';
import { butterflies } from '@/lib/data';
import { motion } from 'framer-motion';

export default function Home() {
  const featuredButterflies = butterflies.slice(0, 3);

  return (
    <main 
      style={{ 
        backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2550')",
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* We simplify the section's job to just centering its direct child */}
      <section className="h-screen flex justify-center items-center">
        {/* This div now holds all content and handles text alignment */}
        <div className="text-center text-white px-4">
          <motion.h1 
            className="text-7xl font-lora"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Explore Butterfly Havens
          </motion.h1>
          <motion.p 
            className="text-lg mt-4 max-w-2xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Guided insect photography expeditions in their pristine natural habitats.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/trips" className="mt-8 inline-block border border-white/80 bg-transparent hover:bg-white/10 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300">
              Discover Trips
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Species Section */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-lora text-white mb-12">Featured Species</h2>
        
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {featuredButterflies.map((kupu, index) => (
            <ButterflyCard
              key={kupu.id}
              id={kupu.id}
              name={kupu.name}
              description={kupu.commonName}
              location={kupu.location}
              index={index}
            />
          ))}
        </div>
      </section>
    </main>
  );
}