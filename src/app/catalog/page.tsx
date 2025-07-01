// src/app/catalog/page.tsx

import ButterflyCard from "@/components/ButterflyCard";
import { butterflies } from '@/lib/data';

export default function CatalogPage() {
  return (
    <main 
      className="text-white" 
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1445262102387-5f537a8e753e?q=80&w=2574)",
        backgroundSize: 'cover'
      }}
    >
      <div className="py-24 text-center px-4">
        <h1 className="text-6xl font-lora mb-4">Our Specimen Catalog</h1>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
          Discover a curated collection of breathtaking butterfly species from across the Indonesian archipelago.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          
          {/* We get the 'index' from the map function here */}
          {butterflies.map((kupu, index) => (
            <ButterflyCard
              key={kupu.id}
              id={kupu.id}
              name={kupu.name}
              description={kupu.commonName}
              location={kupu.location}
              index={index} // And pass it as a prop here
            />
          ))}

        </div>
      </div>
    </main>
  );
}