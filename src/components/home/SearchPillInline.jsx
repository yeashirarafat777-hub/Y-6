import { Search } from 'lucide-react';
import { useI18n } from '../../context/I18nContext.jsx';
import useMediaQuery from '../../hooks/useMediaQuery.js';

const SearchPillInline = () => {
  const { t } = useI18n();
  const isMd = useMediaQuery('(min-width: 768px)');

  // Make sure it always fits between logo and right buttons
  return (
    <div className="w-full max-w-[min(620px,calc(100vw-120px))]">
      <div className="flex items-center justify-between gap-2 px-3 py-2 transition bg-white border rounded-full shadow-sm hover:shadow-md">
        <div className="flex items-center min-w-0 gap-2 text-sm text-gray-700 truncate md:gap-3">
          <span className="text-lg leading-none md:text-xl">🏠</span>
          <span className="font-semibold truncate">{t('search_placeholder_where') || 'Anywhere'}</span>
          {isMd && (
            <>
              <span className="text-gray-300">|</span>
              <span className="text-gray-500 truncate">{t('search_add_dates') || 'Anytime'}</span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-500 truncate">{t('search_add_guests') || 'Add guests'}</span>
            </>
          )}
        </div>
        <button className="grid flex-none text-white transition bg-pink-600 rounded-full h-9 w-9 md:h-10 md:w-10 place-items-center hover:bg-pink-700" aria-label="Search">
          <Search size={18} />
        </button>
      </div>
    </div>
  );
};

export default SearchPillInline;