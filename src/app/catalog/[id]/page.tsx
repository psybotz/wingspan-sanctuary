// src/app/catalog/[id]/page.tsx

import Link from 'next/link';
import Image from 'next/image';
import { butterflies } from '@/lib/data';

// Note the 'async' keyword here. This is the key fix.
export default async function ButterflyDetailPage({ params }: { params: { id: string } }) {
  const butterfly = butterflies.find(b => b.id == parseInt(params.id));

  if (!butterfly) {
    return (
      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold">Butterfly Not Found!</h1>
        <p className="mt-4">
          <Link href="/catalog" className="text-green-600 hover:underline">&larr; Back to Catalog</Link>
        </p>
      </main>
    );
  }

  return (
    <main className="bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-left mb-8">
          <Link href="/catalog" className="text-green-600 hover:underline font-semibold">
            &larr; Back to Catalog
          </Link>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg grid md:grid-cols-2 gap-10 items-start">
          {/* Image Column */}
          <div>
            <Image src={butterfly.imageUrl} alt={butterfly.name} width={800} height={600} className="w-full h-auto rounded-lg" />
          </div>

          {/* Details Column */}
          <div className="space-y-5">
            <div>
              <p className="text-sm font-semibold text-gray-500">Common Name</p>
              <h1 className="text-4xl font-bold text-gray-900">{butterfly.commonName}</h1>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500">Scientific Name</p>
              <h2 className="text-2xl text-green-700 font-light italic">{butterfly.name}</h2>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500">Location</p>
              <p className="text-lg text-gray-700">{butterfly.location}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500">Description</p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {butterfly.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}