import { Mail, Phone } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [toast, setToast] = useState('');

  const subscribe = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setToast('Please enter a valid email');
    } else {
      setToast('Subscribed successfully!');
      setEmail('');
    }
    setTimeout(() => setToast(''), 2500);
  };

  return (
    <footer className="mt-16 bg-neutral-900 text-neutral-200">
      <div className="grid max-w-screen-xl grid-cols-1 gap-12 px-4 py-20 mx-auto sm:px-8 md:px-12 md:grid-cols-3">
        <div>
          <h3 className="mb-3 text-xl font-semibold">About Us</h3>
          <p className="text-sm text-neutral-400">
            We connect guests with unique homes, experiences, and services around the world. Stay with comfort and confidence.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center gap-2"><Phone size={16} /> +1 291 3912 329</div>
            <div className="flex items-center gap-2"><Mail size={16} /> info@gmail.com</div>
          </div>
          <form onSubmit={subscribe} className="flex mt-5">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-l-full bg-neutral-800 border-neutral-700 focus:outline-none"
              placeholder="Enter your e-mail"
            />
            <button className="px-5 py-3 font-semibold bg-pink-600 rounded-r-full hover:bg-pink-700">Subscribe</button>
          </form>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold">Latest Tweet</h3>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li>Discover family-friendly stays and guides for your next trip.</li>
            <li>Get the best budget travel tips and save more.</li>
            <li>Explore outdoor adventures around the world.</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold">Instagram</h3>
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <img key={i} className="object-cover w-full h-20 rounded" src={`https://picsum.photos/seed/ig${i}/200/200`} alt="Instagram" />
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 py-5 mx-auto text-sm sm:px-8 md:px-12 text-neutral-400">
          <div>© {year} Airbnb Clone • Terms • Sitemap • Privacy</div>
          <div className="flex items-center gap-4">
            <span>English (US)</span>
            <span>$ USD</span>
          </div>
        </div>
      </div>

      {toast && (
        <div className="fixed bottom-6 right-6 z-[999] bg-black text-white px-4 py-3 rounded-lg shadow-lg">
          {toast}
        </div>
      )}
    </footer>
  );
};
export default Footer;