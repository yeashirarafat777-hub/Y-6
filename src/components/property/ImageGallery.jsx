const ImageGallery = ({ images = [] }) => {
  if (!images.length) return null;

  return (
    <div className="mt-3 overflow-hidden sm:mt-6 rounded-2xl">
      {/* Mobile: single large image */}
      <div className="sm:hidden">
        <img src={images[0]} alt="Main view" className="w-full h-[220px] xs:h-[240px] object-cover" />
      </div>

      {/* Tablet+: grid */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-2 h-[260px] md:h-[480px]">
        <div className="col-span-2 row-span-2">
          <img src={images[0]} alt="Main" className="object-cover w-full h-full transition hover:brightness-95" />
        </div>
        {images.slice(1, 5).map((src, i) => (
          <img key={i} src={src} alt={`View ${i + 2}`} className="object-cover w-full h-full transition hover:brightness-95" />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;