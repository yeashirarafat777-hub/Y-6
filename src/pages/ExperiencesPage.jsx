import Container from '../components/layout/Container.jsx';
import { useI18n } from '../context/I18nContext.jsx';

const ExperiencesPage = () => {
  const { t } = useI18n();
  return (
    <div>
      <Container>
        <div className="py-6">
          <h1 className="mb-3 text-2xl font-bold md:text-3xl">{t('navExperiences')}</h1>
          <p className="mb-8 text-gray-600">Discover unique activities led by local hosts.</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="overflow-hidden border rounded-xl">
                <img src={`https://picsum.photos/seed/exp-${i}/800/600`} alt="" className="object-cover w-full h-48" />
                <div className="p-4">
                  <div className="font-semibold">Experience #{i + 1}</div>
                  <div className="text-sm text-gray-500">Hosted by Local Expert</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ExperiencesPage;