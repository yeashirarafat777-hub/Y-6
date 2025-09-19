import { Globe, Menu, Home, PartyPopper, ConciergeBell } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SiAirbnb } from 'react-icons/si';
import LanguageModal from '../shared/LanguageModal.jsx';
import { useI18n } from '../../context/I18nContext.jsx';
import useMediaQuery from '../../hooks/useMediaQuery.js';
import SearchPillInline from '../home/SearchPillInline.jsx';

const NavTab = ({ icon: Icon, label, active, onClick, showNew }) => (
  <button onClick={onClick} className="relative flex items-center gap-2 px-3 py-2">
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
  const location = useLocation();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery('(min-width: 768px)');

  // Scroll state to switch center content
  const [scrolled, setScrolled] = useState(false);
  const onHome = location.pathname === '/';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [location.pathname]);

  // center: show tabs only when home + desktop + not scrolled
  const showTabs = onHome && isDesktop && !scrolled;
  // otherwise show compact search inside the header (this keeps pill aligned with the logo level)
  const showInlineSearch = !showTabs;

  const go = (path) => () => navigate(path);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Header row with three zones: left (logo), center (tabs or compact search), right (actions) */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 md:px-12 h-[64px] grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        {/* Left - brand */}
        <Link to="/" className="flex items-center gap-2 text-pink-600">
          <SiAirbnb className="text-3xl" />
          <span className="text-2xl font-extrabold tracking-tight">airbnb</span>
        </Link>

        {/* Center - either tabs (home top) or inline search pill (scrolled or other pages or mobile) */}
        <div className="flex justify-center">
          {showTabs ? (
            <nav className="items-center hidden gap-6 md:flex">
              <NavTab icon={Home} label={t('navHomes')} active={location.pathname === '/'} onClick={go('/')} />
              <NavTab icon={PartyPopper} label={t('navExperiences')} active={location.pathname === '/experiences'} onClick={go('/experiences')} showNew />
              <NavTab icon={ConciergeBell} label={t('navServices')} active={location.pathname === '/services'} onClick={go('/services')} showNew />
            </nav>
          ) : (
            <SearchPillInline />
          )}
        </div>

        {/* Right - actions */}
        <div className="flex items-center justify-end gap-2">
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

      {/* subtle bottom gradient */}
      <div className="h-6 bg-gradient-to-b from-black/[0.03] to-transparent pointer-events-none" />

      <LanguageModal open={openLang} onClose={() => setOpenLang(false)} />
    </header>
  );
};

export default Header;