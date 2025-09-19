import { Star, Upload, Heart, Medal } from 'lucide-react';

const PropertyHeader = ({ title, location, rating, reviewsCount, isSuperhost }) => {
  return (
    <div className="pt-6">
      <h1 className="text-2xl md:text-3xl font-semibold">{title}</h1>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2 text-sm">
        <div className="flex items-center space-x-2 flex-wrap">
          <div className="flex items-center">
            <Star className="text-black" fill="currentColor" size={14} />
            <span className="font-semibold ml-1">{rating}</span>
          </div>
          <span className="text-gray-800 hover:underline cursor-pointer">· {reviewsCount} reviews</span>
          {isSuperhost && (
            <>
              <span className="hidden sm:inline">·</span>
              <div className="flex items-center">
                <Medal size={14} />
                <span className="ml-1">Superhost</span>
              </div>
            </>
          )}
          <span>·</span>
          <span className="font-semibold text-gray-800 underline cursor-pointer">{location}</span>
        </div>
        <div className="flex items-center space-x-4 mt-2 sm:mt-0">
          <button className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-lg">
            <Upload size={18} />
            <span className="underline font-semibold">Share</span>
          </button>
          <button className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-lg">
            <Heart size={18} />
            <span className="underline font-semibold">Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default PropertyHeader;