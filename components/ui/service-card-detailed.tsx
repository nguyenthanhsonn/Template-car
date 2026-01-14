import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardDetailedProps {
  title: string;
  description: string;
  price: string;
  image?: string;
  badge?: string;
  badgeColor?: 'red' | 'white';
  buttonText?: string;
  buttonVariant?: 'default' | 'red';
  onContact?: () => void;
}

export default function ServiceCardDetailed({
  title,
  description,
  price,
  image,
  badge,
  badgeColor = 'red',
  buttonText = '→',
  buttonVariant = 'default',
  onContact,
}: ServiceCardDetailedProps) {
  return (
    <div className="bg-[#1a1612] rounded-lg overflow-hidden border border-[#2a2622] hover:border-[#dc2626] transition-all duration-300 hover:shadow-lg hover:shadow-[#dc2626]/20 group hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
            </svg>
          </div>
        )}
        
        {/* Badge */}
        {badge && (
          <div className={`absolute top-3 right-3 px-3 py-1 rounded-md text-xs font-bold ${
            badgeColor === 'red' 
              ? 'bg-[#dc2626] text-white' 
              : 'bg-white text-[#0a0a0a]'
          }`}>
            {badge}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#dc2626] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed min-h-[60px]">
          {description}
        </p>
        
        {/* Price */}
        <div className="mb-4">
          <p className="text-[#dc2626] font-bold text-lg">
            {price}
          </p>
        </div>

        {/* Button */}
        {buttonVariant === 'red' ? (
          <button
            onClick={onContact}
            className="w-full bg-[#dc2626] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#b91c1c] transition-colors duration-300 text-sm"
          >
            {buttonText}
          </button>
        ) : (
          <button
            onClick={onContact}
            className="w-full bg-[#0a0a0a] text-white px-6 py-3 rounded-md font-semibold border border-[#2a2622] hover:border-[#dc2626] hover:bg-[#1a1612] transition-all duration-300 flex items-center justify-center"
            aria-label="View service"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
