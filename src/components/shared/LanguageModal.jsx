import { X, Check, Languages, DollarSign } from 'lucide-react';
import { useState } from 'react';
import { useI18n } from '../../context/I18nContext.jsx';

const LanguageModal = ({ open, onClose }) => {
  const { lang, setLang, currency, setCurrency, t } = useI18n();
  const [tab, setTab] = useState('lang');
  if (!open) return null;

  const languages = [
    { code: 'en', label: 'English (United States)' },
    { code: 'bn', label: 'বাংলা (Bangladesh)' },
    { code: 'fr', label: 'Français (France)' },
  ];
  const currencies = ['USD', 'BDT', 'EUR'];

  return (
    <div className="fixed inset-0 z-[999] bg-black/40 flex items-start justify-center pt-24">
      <div className="w-full max-w-3xl overflow-hidden bg-white shadow-xl rounded-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <div className="flex gap-6">
            <button
              onClick={() => setTab('lang')}
              className={`pb-2 font-semibold ${tab === 'lang' ? 'border-b-2 border-black' : 'text-gray-500'}`}
            >
              {t('languageAndRegion')}
            </button>
            <button
              onClick={() => setTab('currency')}
              className={`pb-2 font-semibold ${tab === 'currency' ? 'border-b-2 border-black' : 'text-gray-500'}`}
            >
              {t('currency')}
            </button>
          </div>
          <button className="p-2 rounded-full hover:bg-gray-100" onClick={onClose} aria-label="Close">
            <X />
          </button>
        </div>

        <div className="p-6 max-h-[65vh] overflow-y-auto">
          {tab === 'lang' && (
            <div className="space-y-2">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`w-full flex items-center justify-between border rounded-xl px-4 py-3 hover:bg-gray-50 ${lang === l.code ? 'border-black' : 'border-gray-200'}`}
                >
                  <div className="flex items-center gap-3">
                    <Languages />
                    <div className="text-left">
                      <div className="font-semibold">{l.label}</div>
                    </div>
                  </div>
                  {lang === l.code && <Check />}
                </button>
              ))}
            </div>
          )}

          {tab === 'currency' && (
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {currencies.map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`flex items-center gap-3 border rounded-xl px-4 py-3 hover:bg-gray-50 ${currency === c ? 'border-black' : 'border-gray-200'}`}
                >
                  <DollarSign />
                  <div className="font-semibold">{c}</div>
                  {currency === c && <Check className="ml-auto" />}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-end p-4 border-t">
          <button onClick={onClose} className="px-4 py-2 mr-2 rounded-lg hover:bg-gray-100">{t('cancel')}</button>
          <button onClick={onClose} className="px-4 py-2 text-white bg-black rounded-lg">{t('save')}</button>
        </div>
      </div>
    </div>
  );
};

export default LanguageModal;