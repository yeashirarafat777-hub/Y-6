import { Star, Upload, Heart, Medal } from 'lucide-react';

const PropertyHeader = ({ title, location, rating, reviewsCount, isSuperhost }) => {
  return (
    <div className="pt-4 sm:pt-6">
      <h1 className="text-xl font-semibold sm:text-2xl md:text-3xl">{title}</h1>
      <div className="flex flex-col mt-2 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center">
            <Star className="text-black" fill="currentColor" size={14} />
            <span className="ml-1 font-semibold">{rating}</span>
          </div>
          <span className="text-gray-800 cursor-pointer hover:underline">· {reviewsCount} reviews</span>
          {isSuperhost && (
            <>
              <span className="hidden sm:inline">·</span>
              <div className="flex items-center">
                <Medal size={14} />
                <span className="ml-1">Superhost</span>
              </div>
            </>
          )}
          <span className="hidden sm:inline">·</span>
          <span className="font-semibold text-gray-800 underline cursor-pointer">{location}</span>
        </div>
        <div className="flex items-center gap-3 mt-2 sm:mt-0">
          <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100"><Upload size={18} /> <span className="font-semibold underline">Share</span></button>
          <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100"><Heart size={18} /> <span className="font-semibold underline">Save</span></button>
        </div>
      </div>
    </div>
  );
};
export default PropertyHeader;