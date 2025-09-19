const LocationMap = ({ location }) => {
  return (
    <div className="py-6 sm:py-8">
      <h2 className="mb-3 text-xl font-semibold sm:text-2xl sm:mb-4">Where you’ll be</h2>
      <p className="mb-3 text-gray-600 sm:mb-4">{location}</p>
      <div className="h-56 overflow-hidden sm:h-72 md:h-96 rounded-xl">
        <img
          src="/map-placeholder.png"
          alt="Location map"
          className="object-cover w-full h-full"
          onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/1200x500.png?text=Map+Placeholder')}
        />
      </div>
    </div>
  );
};
export default LocationMap;