import { Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const HomeCard = ({ item }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="relative w-[260px] md:w-[300px] shrink-0">
      <Link to={`/rooms/${item.id}`} className="block group">
        <div className="relative h-[200px] md:h-[220px] rounded-xl overflow-hidden">
          <img
            src={item.image || item.images?.[0]}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
          />
          <div className="absolute top-2 left-2 bg-white/90 text-gray-900 text-[11px] font-semibold px-2 py-1 rounded-full shadow">
            Guest favorite
          </div>
          <button
            type="button"
            className="absolute p-2 transition rounded-full top-2 right-2 bg-white/90 hover:bg-white"
            onClick={(e) => {
              e.preventDefault();
              setLiked((s) => !s);
            }}
          >
            <Heart size={18} className={liked ? 'text-red-500 fill-red-500' : ''} />
          </button>
        </div>
        <div className="mt-3">
          <div className="flex items-start justify-between">
            <h3 className="text-sm font-semibold md:text-base line-clamp-1">{item.title}</h3>
            <div className="flex items-center gap-1 text-sm">
              <Star size={14} className="text-black" fill="currentColor" />
              <span>{(item.rating ?? 4.84).toFixed(2)}</span>
            </div>
          </div>
          <div className="text-sm text-gray-500 line-clamp-1">{item.city}</div>
          <div className="text-sm md:text-[15px] mt-1">
            <span className="font-semibold">${item.price}</span>
            <span className="text-gray-500"> for {item.nights} nights</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomeCard;