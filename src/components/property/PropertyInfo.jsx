const PropertyInfo = ({ host, specs, highlights, description, amenities }) => {
    return (
      <div className="col-span-2">
        {/* Host and Specs */}
        <div className="pb-6 border-b">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-semibold">{`Entire villa hosted by ${host.name}`}</h2>
                    <p className="text-gray-500">
                        {`${specs.guests} guests · ${specs.bedrooms} bedrooms · ${specs.beds} beds · ${specs.baths} baths`}
                    </p>
                </div>
                <img src={host.avatar} alt={host.name} className="w-14 h-14 rounded-full" />
            </div>
        </div>

        {/* Highlights */}
        <div className="py-6 border-b space-y-4">
            {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-gray-500 text-sm">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* Description */}
        <div className="py-6 border-b">
            <p>{description}</p>
            <button className="font-semibold underline mt-2">Show more</button>
        </div>

        {/* Amenities */}
        <div className="py-6 border-b">
            <h2 className="text-2xl font-semibold mb-4">What this place offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {amenities.map(amenity => (
                    <div key={amenity.name} className="flex items-center space-x-3">
                        {amenity.icon}
                        <span>{amenity.name}</span>
                    </div>
                ))}
            </div>
            <button className="mt-6 border border-black text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition">
                Show all amenities
            </button>
        </div>
      </div>
    );
}

export default PropertyInfo;