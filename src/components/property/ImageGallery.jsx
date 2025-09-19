const ImageGallery = ({ images }) => {
  return (
    <div className="mt-6 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 h-[300px] md:h-[550px]">
      {/* Main Image */}
      <div className="md:col-span-2 md:row-span-2">
        <img src={images[0]} alt="Main view" className="w-full h-full object-cover cursor-pointer hover:brightness-90 transition" />
      </div>
      {/* Other Images */}
      <div className="hidden md:block"><img src={images[1]} alt="View 2" className="w-full h-full object-cover cursor-pointer hover:brightness-90 transition" /></div>
      <div className="hidden md:block"><img src={images[2]} alt="View 3" className="w-full h-full object-cover cursor-pointer hover:brightness-90 transition" /></div>
      <div className="hidden md:block"><img src={images[3]} alt="View 4" className="w-full h-full object-cover cursor-pointer hover:brightness-90 transition" /></div>
      <div className="hidden md:block"><img src={images[4]} alt="View 5" className="w-full h-full object-cover cursor-pointer hover:brightness-90 transition" /></div>
    </div>
  );
};
export default ImageGallery;