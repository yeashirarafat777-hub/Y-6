import { useEffect, useMemo, useState } from 'react';
import { useI18n } from '../../context/I18nContext.jsx';
import useMediaQuery from '../../hooks/useMediaQuery.js';

const Segment = ({ label, value }) => (
  <div className="px-4 py-2">
    <div className="text-[10px] uppercase font-semibold text-gray-500">{label}</div>
    <div className="text-base text-gray-700">{value}</div>
  </div>
);

const HomeSearchBar = () => {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const showLarge = useMemo(() => isDesktop && !scrolled, [isDesktop, scrolled]);
  if (!showLarge) return null; // compact pill is handled by Header (same level as logo)

  return (
    <div className="sticky top-[64px] z-40 bg-transparent">
      <div className="max-w-5xl px-4 py-4 mx-auto sm:px-8 md:px-12 md:py-6">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr_auto] items-center gap-2 border rounded-full px-2 bg-white shadow-xl">
          <Segment label={t('search_where') || 'Where'} value={t('search_placeholder_where') || 'Search destinations'} />
          <div className="border-l">
            <Segment label={t('search_when') || 'When'} value={t('search_add_dates') || 'Add dates'} />
          </div>
          <div className="border-l">
            <Segment label={t('search_when') || 'When'} value={t('search_add_dates') || 'Add dates'} />
          </div>
          <div className="border-l">
            <Segment label={t('search_who') || 'Who'} value={t('search_add_guests') || 'Add guests'} />
          </div>
          <button className="grid w-12 h-12 m-1 text-white transition bg-pink-600 rounded-full place-items-center hover:bg-pink-700" aria-label="Search">
            {/* empty, just visual like Airbnb */}
            <svg width="0" height="0" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSearchBar;