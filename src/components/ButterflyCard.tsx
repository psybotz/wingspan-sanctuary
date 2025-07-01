// src/components/ButterflyCard.tsx

interface CardProps {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

export default function ButterflyCard(props: CardProps) {
  return (
    <div className="bg-white w-full max-w-sm p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <img src={props.imageUrl} alt={props.name} className="w-full h-48 object-cover rounded-lg" />
      <h2 className="text-2xl font-bold mt-4"><a href={`/catalog/${props.id}`}>{props.name}</a></h2>
      <p className="mt-2 text-gray-600">{props.description}</p>
      <a href={`/catalog/${props.id}`} className="mt-4 inline-block bg-white text-green-600 border-2 border-green-600 font-bold py-2 px-5 rounded-lg hover:bg-green-600 hover:text-white transition-colors duration-300">
        View Details
      </a>
    </div>
  );
}