import Container from '../components/layout/Container.jsx';
import { useI18n } from '../context/I18nContext.jsx';

const ServicesPage = () => {
  const { t } = useI18n();
  return (
    <div>
      <Container>
        <div className="py-6">
          <h1 className="mb-3 text-2xl font-bold md:text-3xl">{t('navServices')}</h1>
          <p className="mb-8 text-gray-600">Book add-on services to make your stay perfect.</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { title: 'Airport Pickup', img: 'svc-1' },
              { title: 'Daily Cleaning', img: 'svc-2' },
              { title: 'Private Chef', img: 'svc-3' },
              { title: 'City Guide', img: 'svc-4' },
              { title: 'Laundry', img: 'svc-5' },
              { title: 'Grocery Delivery', img: 'svc-6' },
            ].map((s, i) => (
              <div key={i} className="overflow-hidden border rounded-xl">
                <img src={`https://picsum.photos/seed/${s.img}/800/600`} alt={s.title} className="object-cover w-full h-48" />
                <div className="p-4">
                  <div className="font-semibold">{s.title}</div>
                  <div className="text-sm text-gray-500">Add this to your booking</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ServicesPage;