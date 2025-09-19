import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import HomeCard from './HomeCard';

const CitySection = ({ title, items = [] }) => {
  const scrollerRef = useRef(null);

  const scrollBy = (dir = 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 900, behavior: 'smooth' });
  };

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold md:text-2xl">{title} <span className="text-gray-400">›</span></h2>
        <div className="hidden gap-2 md:flex">
          <button
            onClick={() => scrollBy(-1)}
            className="grid w-10 h-10 bg-white border rounded-full place-items-center hover:bg-gray-50"
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scrollBy(1)}
            className="grid w-10 h-10 bg-white border rounded-full place-items-center hover:bg-gray-50"
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="relative flex gap-4 pb-2 overflow-x-auto scroll-smooth"
      >
        {items.map((item) => (
          <HomeCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default CitySection;