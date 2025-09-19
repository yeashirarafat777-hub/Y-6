import { Search } from 'lucide-react';
import { useI18n } from '../../context/I18nContext.jsx';

const SearchPillInline = () => {
  const { t } = useI18n();
  return (
    <div className="w-full max-w-[620px]">
      <div className="flex items-center justify-between gap-2 px-3 py-2 transition bg-white border rounded-full shadow-sm hover:shadow-md">
        <div className="flex items-center gap-3 text-sm text-gray-700 truncate">
          <span className="text-xl">🏠</span>
          <span className="font-semibold truncate">{t('search_placeholder_where') || 'Anywhere'}</span>
          <span className="text-gray-300">|</span>
          <span className="text-gray-500 truncate">{t('search_add_dates') || 'Anytime'}</span>
          <span className="text-gray-300">|</span>
          <span className="text-gray-500 truncate">{t('search_add_guests') || 'Add guests'}</span>
        </div>
        <button
          className="grid w-10 h-10 text-white transition bg-pink-600 rounded-full place-items-center hover:bg-pink-700"
          aria-label="Search"
        >
          <Search size={18} />
        </button>
      </div>
    </div>
  );
};

export default SearchPillInline;