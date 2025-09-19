import { useEffect, useState } from 'react';

export default function useMediaQuery(query) {
  const get = () =>
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia(query).matches
      : false;

  const [matches, setMatches] = useState(get);

  useEffect(() => {
    if (!window.matchMedia) return;
    const mql = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);

    try { mql.addEventListener('change', onChange); } catch { mql.addListener(onChange); }
    setMatches(mql.matches);

    return () => {
      try { mql.removeEventListener('change', onChange); } catch { mql.removeListener(onChange); }
    };
  }, [query]);

  return matches;
}