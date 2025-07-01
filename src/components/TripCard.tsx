// src/components/TripCard.tsx

"use client";

import Link from 'next/link';

interface TripCardProps {
  title: string;
  location: string;
  duration: string;
  imageUrl: string;
}

export default function TripCard(props: TripCardProps) {
  return (
    <Link href="/contact" className="relative w-full max-w-sm h-96 block group overflow-hidden rounded-lg">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <p className="text-sm font-semibold tracking-wider">{props.location}</p>
        <h3 className="text-3xl font-lora mt-1">{props.title}</h3>
        <p className="text-sm mt-2 opacity-80">{props.duration}</p>
      </div>
    </Link>
  );
}