import { Globe, Menu, Home, PartyPopper, ConciergeBell } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SiAirbnb } from 'react-icons/si';
import LanguageModal from '../shared/LanguageModal.jsx';
import { useI18n } from '../../context/I18nContext.jsx';
import useMediaQuery from '../../hooks/useMediaQuery.js';
import SearchPillInline from '../home/SearchPillInline.jsx';

const NavTab = ({ icon: Icon, label, active, onClick, showNew }) => (
  <button onClick={onClick} className="relative items-center hidden gap-2 px-3 py-2 md:flex">
    <Icon className={`${active ? 'text-black' : 'text-gray-400'}`} />
    <span className={`font-semibold ${active ? 'text-black' : 'text-gray-500'}`}>{label}</span>
    {showNew && (
      <span className="absolute -top-1 left-6 text-[10px] font-bold bg-slate-800 text-white px-2 py-0.5 rounded-full shadow">
        NEW
      </span>
    )}
    {active && <span className="absolute -bottom-[6px] left-0 right-0 mx-auto w-14 h-[3px] bg-black rounded-full" />}
  </button>
);

const Header = () => {
  const { t } = useI18n();
  const [openLang, setOpenLang] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const location = useLocation();
  const navigate = useNavigate();
  const onHome = location.pathname === '/';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [location.pathname]);

  const showTabs = onHome && isDesktop && !scrolled;
  const go = (path) => () => navigate(path);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* 3 columns keep center perfectly aligned with logo on all phones */}
      <div className="max-w-screen-xl mx-auto px-3 sm:px-5 md:px-8 lg:px-12 h-[64px] grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 sm:gap-3 md:gap-4">
        {/* Left - brand (hide long text on the smallest widths) */}
        <Link to="/" className="flex items-center min-w-0 gap-2 text-pink-600">
          <SiAirbnb className="text-2xl sm:text-3xl shrink-0" />
          <span className="hidden text-xl font-extrabold tracking-tight truncate sm:text-2xl xs:inline">
            airbnb
          </span>
        </Link>

        {/* Center - Tabs (desktop, top-of-home) OR compact search pill (else) */}
        <div className="flex justify-center min-w-0">
          {showTabs ? (
            <nav className="flex items-center gap-3 sm:gap-6">
              <NavTab icon={Home} label={t('navHomes')} active={location.pathname === '/'} onClick={go('/')} />
              <NavTab icon={PartyPopper} label={t('navExperiences')} active={location.pathname === '/experiences'} onClick={go('/experiences')} showNew />
              <NavTab icon={ConciergeBell} label={t('navServices')} active={location.pathname === '/services'} onClick={go('/services')} showNew />
            </nav>
          ) : (
            <SearchPillInline />
          )}
        </div>

        {/* Right - actions */}
        <div className="flex items-center justify-end gap-1 sm:gap-2">
          <button className="hidden px-3 py-2 font-semibold rounded-full md:inline hover:bg-gray-100">
            {t('becomeHost')}
          </button>
          <button onClick={() => setOpenLang(true)} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200" aria-label="Language">
            <Globe />
          </button>
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200" aria-label="Menu">
            <Menu />
          </button>
        </div>
      </div>

      {/* light bottom gradient */}
      <div className="h-5 sm:h-6 bg-gradient-to-b from-black/[0.03] to-transparent pointer-events-none" />

      <LanguageModal open={openLang} onClose={() => setOpenLang(false)} />
    </header>
  );
};

export default Header;