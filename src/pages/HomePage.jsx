import Container from '../components/layout/Container.jsx';
import HomeSearchBar from '../components/home/HomeSearchBar.jsx';
import CitySection from '../components/home/CitySection.jsx';
import { homeSections } from '../data/homeData.js';
import { useI18n } from '../context/I18nContext.jsx';

const inspiration = [
  { title: 'Family travel hub', subtitle: 'Tips and inspiration' },
  { title: 'Family budget travel', subtitle: 'Get there for less' },
  { title: 'Vacation ideas for any budget', subtitle: 'Make it special' },
  { title: 'Travel Europe on a budget', subtitle: 'How to take the kids' },
  { title: 'Outdoor adventure', subtitle: 'Explore nature' },
  { title: 'Bucket list national parks', subtitle: 'Must-see parks' },
];

const HomePage = () => {
  const { t } = useI18n();
  return (
    <div className="bg-white">
      <HomeSearchBar />
      <Container>
        <div className="pt-6" />
        {homeSections.map((section) => (
          <CitySection
            key={section.title}
            title={section.title}
            items={section.items.map((it) => ({ ...it, image: it.images[0] }))}
          />
        ))}
        <section className="py-10">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">{t('inspirationTitle')}</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {inspiration.map((card) => (
              <a key={card.title} href="#" className="block p-4 transition border rounded-xl hover:bg-gray-50">
                <div className="font-semibold">{card.title}</div>
                <div className="text-sm text-gray-500">{card.subtitle}</div>
              </a>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default HomePage;