const img = (seed, w = 1200, h = 900) => `https://picsum.photos/seed/${seed}/${w}/${h}`;
const makeItem = (seed, title, city, price, rating = 4.84, nights = 2) => ({
  id: seed,
  title,
  city,
  price,
  rating,
  nights,
  images: [img(`${seed}-1`), img(`${seed}-2`), img(`${seed}-3`), img(`${seed}-4`), img(`${seed}-5`)],
  description:
    'Comfortable stay with great access to local highlights. Cozy interiors, bright and airy rooms, and convenient location for your next getaway.',
});

export const homeSections = [
  {
    title: 'Popular homes in Kuala Lumpur',
    items: [
      makeItem('kl-1', 'Condo in PULAPOL', 'Kuala Lumpur', 76),
      makeItem('kl-2', 'Stay in Bukit Bintang', 'Kuala Lumpur', 91),
      makeItem('kl-3', 'Condo in Keramat', 'Kuala Lumpur', 74),
      makeItem('kl-4', 'Room in Bukit Bintang', 'Kuala Lumpur', 44),
      makeItem('kl-5', 'Apartment in City Center', 'Kuala Lumpur', 98),
      makeItem('kl-6', 'Studio in Ampang', 'Kuala Lumpur', 87),
      makeItem('kl-7', 'Suite in Chow Kit', 'Kuala Lumpur', 105),
      makeItem('kl-8', 'Loft in Setiawangsa', 'Kuala Lumpur', 82),
    ],
  },
  {
    title: 'Stay in London',
    items: [
      makeItem('ldn-1', 'Room in Camden', 'London', 86),
      makeItem('ldn-2', 'Flat in Shoreditch', 'London', 134),
      makeItem('ldn-3', 'Room in Harrow', 'London', 76),
      makeItem('ldn-4', 'Studio in Lambeth', 'London', 112),
      makeItem('ldn-5', 'Apartment near Hyde Park', 'London', 168),
      makeItem('ldn-6', 'Loft in Notting Hill', 'London', 149),
    ],
  },
  {
    title: 'Places to stay in Tokyo',
    items: [
      makeItem('tk-1', 'Hotel in Ota-ku', 'Tokyo', 58),
      makeItem('tk-2', 'Apartment in Shibuya', 'Tokyo', 97),
      makeItem('tk-3', 'Room in Taito-ku', 'Tokyo', 88),
      makeItem('tk-4', 'Room in Sumida-ku', 'Tokyo', 104),
      makeItem('tk-5', 'Apartment in Shinjuku', 'Tokyo', 126),
      makeItem('tk-6', 'Studio in Meguro', 'Tokyo', 119),
    ],
  },
];

export const getListingById = (id) => {
  for (const section of homeSections) {
    const found = section.items.find((i) => i.id === id);
    if (found) return found;
  }
  return null;
};