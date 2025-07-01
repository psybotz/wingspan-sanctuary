// src/app/catalog/page.tsx

import ButterflyCard from "@/components/ButterflyCard";
import { butterflies } from '@/lib/data'; // You correctly imported this!

// You were missing this function wrapper
export default function CatalogPage() { 
  return (
    <main>
      {/* Konten Utama Halaman Katalog */}
      <div className="py-16 text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Butterfly Catalog</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Discover a curated collection of breathtaking butterfly species from across the Indonesian archipelago.
        </p>

        {/* Wadah Galeri */}
        <div className="flex flex-wrap justify-center gap-8">
          
          {/* Perulangan .map() */}
          {butterflies.map((kupu) => (
            <ButterflyCard 
              key={kupu.id}
              id={kupu.id}
              name={kupu.name}
              description={kupu.description} // This will be used by the card
              imageUrl={kupu.imageUrl}
            />
          ))}

        </div>
      </div>
    </main>
  );
}