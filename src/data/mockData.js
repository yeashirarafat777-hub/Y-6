const IMAGES = [
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=60',
  'https://images.unsplash.com/photo-1505691723518-36a7d7ac37e2?auto=format&fit=crop&w=1600&q=60',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=60',
  'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1600&q=60',
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=60',
];

const propertyData = {
  id: '569049214818933247',
  title: 'Stunning Glass-Walled Villa with Mountain Views',
  location: 'Asheville, North Carolina, United States',
  rating: 4.98,
  reviewsCount: 125,
  host: {
    name: 'Sarah',
    avatar: 'https://i.pravatar.cc/100?img=12',
    isSuperhost: true,
  },
  specs: { guests: 8, bedrooms: 4, beds: 5, baths: 4.5 },
  pricePerNight: 750,
  images: IMAGES,
  highlights: [
    { title: 'Self check-in', description: 'Check yourself in with the smartlock.' },
    { title: 'Superhost', description: 'Experienced, highly-rated hosts committed to great stays.' },
  ],
  description:
    'Escape to this breathtaking architectural marvel nestled in the Blue Ridge Mountains. Floor-to-ceiling windows offer panoramic views, while the modern interior provides ultimate comfort.',
  amenities: [
    { name: 'Wifi' },
    { name: 'Free parking on premises' },
    { name: 'Kitchen' },
    { name: 'TV' },
    { name: 'Air conditioning' },
    { name: 'Bath' },
  ],
  reviews: [
    {
      author: 'David',
      authorAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      date: 'October 2024',
      comment:
        'Absolutely phenomenal stay. The views are even better in person. The house was spotless and had everything we needed.',
      rating: 5,
    },
    {
      author: 'Maria',
      authorAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      date: 'September 2024',
      comment:
        'A true 5-star experience. The architecture is stunning, and the location is perfectly secluded yet close to town.',
      rating: 5,
    },
  ],
  locationDetails: {
    lat: 35.5951,
    lng: -82.5515,
    description: 'The exact location is provided after booking.',
  },
};

export { propertyData };
export default propertyData;