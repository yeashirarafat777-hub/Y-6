import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import HomeCard from './HomeCard';

const CitySection = ({ title, items = [] }) => {
  const scrollerRef = useRef(null);
  const scrollBy = (dir = 1) => scrollerRef.current?.scrollBy({ left: dir * 900, behavior: 'smooth' });

  return (
    <section className="py-6 sm:py-8">
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h2 className="text-base font-bold sm:text-xl md:text-2xl">{title} <span className="text-gray-400">›</span></h2>
        <div className="hidden gap-2 md:flex">
          <button onClick={() => scrollBy(-1)} className="grid w-10 h-10 bg-white border rounded-full place-items-center hover:bg-gray-50" aria-label="Scroll left">
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => scrollBy(1)} className="grid w-10 h-10 bg-white border rounded-full place-items-center hover:bg-gray-50" aria-label="Scroll right">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div
        ref={scrollerRef}
        className="relative flex gap-3 px-3 pb-2 -mx-3 overflow-x-auto sm:mx-0 sm:px-0 sm:gap-4 scroll-smooth snap-x snap-mandatory overscroll-x-contain"
      >
        {items.map((item) => <HomeCard key={item.id} item={item} />)}
      </div>
    </section>
  );
};
export default CitySection;