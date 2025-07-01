// src/components/ButterflyCard.tsx

"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

interface CardProps {
  id: number;
  name: string;
  description: string;
  location: string;
  index: number; // Add index to props for staggered animation
}

export default function ButterflyCard(props: CardProps) {
  return (
    <motion.div
      className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-lg p-6 w-72 h-48 flex flex-col justify-between"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      // Use the index to create a staggered delay
      transition={{ duration: 0.5, delay: props.index * 0.15 }}
      viewport={{ once: true }}
    >
      <div>
        <div className="relative group">
          <p className="text-xs uppercase tracking-widest text-gray-300 truncate">
            {props.location}
          </p>
          <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-10 w-max max-w-xs p-2 text-xs text-white bg-black/80 backdrop-blur-sm border border-white/20 rounded-md scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all pointer-events-none">
            {props.location}
          </span>
        </div>
        
        <h2 className="text-2xl font-lora text-white mt-1">{props.description}</h2>
      </div>

      <Link href={`/catalog/${props.id}`} className="text-center w-full mt-4 border border-white/50 text-white py-2 rounded-md hover:bg-white/10 transition-colors duration-300">
        Discover
      </Link>
    </motion.div>
  );
}