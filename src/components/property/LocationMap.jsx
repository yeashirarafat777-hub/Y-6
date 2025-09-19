const LocationMap = ({ location }) => {
  const handleError = (e) => {
    // local file না পেলে fallback remote image
    e.currentTarget.src = 'https://via.placeholder.com/1200x500.png?text=Map+Placeholder';
  };

  return (
    <div className="py-8">
      <h2 className="mb-4 text-2xl font-semibold">Where you’ll be</h2>
      <p className="mb-4 text-gray-600">{location}</p>
      <div className="overflow-hidden h-96 rounded-xl">
        <img
          src="/map-placeholder.png"
          alt="Location map"
          className="object-cover w-full h-full"
          onError={handleError}
        />
      </div>
    </div>
  );
};

export default LocationMap;