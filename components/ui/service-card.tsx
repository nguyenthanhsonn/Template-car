import Image from 'next/image';
import Button from './button';

interface ServiceCardProps {
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
}

export default function ServiceCard({ title, description, image, icon }: ServiceCardProps) {
  return (
    <div className="bg-[#1a1612] rounded-lg overflow-hidden border border-[#2a2622] hover:border-[#dc2626] transition-all duration-300 hover:shadow-lg hover:shadow-[#dc2626]/20 group">
      {image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}
      {icon && !image && (
        <div className="h-48 flex items-center justify-center bg-[#0a0a0a]">
          <div className="text-[#dc2626] text-6xl group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#dc2626] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
          {description}
        </p>
        <Button href="/contact" variant="outline" size="sm">
          Tìm hiểu thêm
        </Button>
      </div>
    </div>
  );
}
