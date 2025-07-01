// src/app/catalog/page.tsx

import ButterflyCard from "@/components/ButterflyCard";
import { butterflies } from '@/lib/data';

export default function CatalogPage() {
  return (
    <main 
      className="text-white" 
      style={{
        // We renamed `background` to `backgroundImage`
        backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1710196913619-75570747478a?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="py-24 text-center px-4">
        <h1 className="text-6xl font-lora mb-4">Our Specimen Catalog</h1>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
          Discover a curated collection of breathtaking butterfly species from across the Indonesian archipelago.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {butterflies.map((kupu) => (
            <ButterflyCard
              key={kupu.id}
              id={kupu.id}
              name={kupu.name} // Scientific Name
              description={kupu.commonName} // Common Name
              location={kupu.location}
            />
          ))}
        </div>
      </div>
    </main>
  );
}