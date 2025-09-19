import { useParams } from 'react-router-dom';
import Container from '../components/layout/Container.jsx';
import { propertyData as fallbackProperty } from '../data/mockData.js';
import { getListingById } from '../data/homeData.js';
import PropertyHeader from '../components/property/PropertyHeader.jsx';
import ImageGallery from '../components/property/ImageGallery.jsx';
import PropertyInfo from '../components/property/PropertyInfo.jsx';
import BookingWidget from '../components/property/BookingWidget.jsx';
import Reviews from '../components/property/Reviews.jsx';
import LocationMap from '../components/property/LocationMap.jsx';

const toPropertyShape = (item) => {
  if (!item) return null;
  return {
    id: item.id,
    title: item.title,
    location: `${item.city}, ${item.city} Region`,
    rating: item.rating ?? 4.84,
    reviewsCount: 120,
    host: { name: 'Sarah', avatar: 'https://i.pravatar.cc/100?img=12', isSuperhost: true },
    specs: { guests: 4, bedrooms: 2, beds: 2, baths: 1.5 },
    pricePerNight: item.price,
    images: item.images || [],
    highlights: [
      { title: 'Self check-in', description: 'Smartlock for easy access.' },
      { title: 'Great location', description: 'Close to popular spots.' },
    ],
    description: item.description,
    amenities: [{ name: 'Wifi' }, { name: 'Kitchen' }, { name: 'TV' }, { name: 'Air conditioning' }],
    reviews: [
      {
        author: 'David',
        authorAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        date: 'October 2024',
        comment: 'Great stay, super clean and convenient location.',
        rating: 5,
      },
      {
        author: 'Maria',
        authorAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        date: 'September 2024',
        comment: 'Lovely place, would visit again!',
        rating: 5,
      },
    ],
  };
};

const PropertyDetailPage = () => {
  const { id } = useParams();
  const item = id ? getListingById(id) : null;
  const data = toPropertyShape(item) || fallbackProperty;

  return (
    <Container>
      <PropertyHeader
        title={data.title}
        location={data.location}
        rating={data.rating}
        reviewsCount={data.reviewsCount}
        isSuperhost={data.host.isSuperhost}
      />
      <ImageGallery images={data.images} />

      <div className="grid grid-cols-1 mt-8 lg:grid-cols-3 gap-x-12">
        <div className="lg:col-span-2">
          <PropertyInfo
            host={data.host}
            specs={data.specs}
            highlights={data.highlights}
            description={data.description}
            amenities={data.amenities}
          />
        </div>
        <div className="mt-8 lg:col-span-1 lg:mt-0">
          <BookingWidget
            pricePerNight={data.pricePerNight}
            rating={data.rating}
            reviewsCount={data.reviewsCount}
          />
        </div>
      </div>

      <Reviews rating={data.rating} reviewsCount={data.reviewsCount} reviews={data.reviews} />
      <LocationMap location={data.location} />
    </Container>
  );
};

export default PropertyDetailPage;