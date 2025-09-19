import { Star, ChevronDown } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const getNights = (ci, co) => {
  if (!ci || !co) return 0;
  const start = new Date(`${ci}T00:00:00`);
  const end = new Date(`${co}T00:00:00`);
  const diff = (end - start) / (1000 * 60 * 60 * 24);
  return Math.max(0, Math.round(diff));
};
const money = (n) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

const BookingWidget = ({ pricePerNight, rating, reviewsCount, feeRate = 0.14, taxRate = 0.07 }) => {
  const [sp] = useSearchParams();
  const [checkIn, setCheckIn] = useState(sp.get('check_in') || '');
  const [checkOut, setCheckOut] = useState(sp.get('check_out') || '');
  const [guests, setGuests] = useState(1);

  const nights = useMemo(() => getNights(checkIn, checkOut), [checkIn, checkOut]);
  const subtotal = nights * pricePerNight;
  const serviceFee = Math.round(subtotal * feeRate);
  const taxes = Math.round(subtotal * taxRate);
  const total = subtotal + serviceFee + taxes;

  return (
    <div className="p-4 border md:sticky md:top-28 rounded-t-xl md:rounded-xl md:shadow-lg sm:p-6 md:p-6">
      <div className="flex items-baseline justify-between mb-3 sm:mb-4">
        <div><span className="text-xl font-bold sm:text-2xl">{money(pricePerNight)}</span> <span className="text-gray-600">night</span></div>
        <div className="flex items-center text-sm">
          <Star className="text-black" fill="currentColor" size={14} />
          <span className="ml-1 font-semibold">{rating}</span>
          <span className="ml-2 text-gray-500 underline">· {reviewsCount} reviews</span>
        </div>
      </div>

      <div className="grid grid-cols-2 border rounded-lg">
        <div className="p-3 border-r">
          <label htmlFor="ci" className="block text-xs font-semibold uppercase">Check-in</label>
          <input id="ci" type="date" className="w-full text-sm outline-none" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
        </div>
        <div className="p-3">
          <label htmlFor="co" className="block text-xs font-semibold uppercase">Check-out</label>
          <input id="co" type="date" className="w-full text-sm outline-none" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
        </div>
        <div className="flex items-center justify-between col-span-2 p-3 border-t">
          <div>
            <label htmlFor="guests" className="block text-xs font-semibold uppercase">Guests</label>
            <select id="guests" value={guests} onChange={(e) => setGuests(Number(e.target.value))} className="text-sm outline-none">
              {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n} guest{n > 1 ? 's' : ''}</option>)}
            </select>
          </div>
          <ChevronDown />
        </div>
      </div>

      <button className="w-full py-3 mt-4 font-bold text-white transition rounded-lg bg-gradient-to-r from-pink-600 to-rose-600 hover:opacity-90">
        Reserve
      </button>
      <p className="mt-2 text-xs text-center text-gray-500 sm:text-sm">You won't be charged yet</p>

      {nights > 0 && (
        <>
          <div className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-gray-700 text-sm">
            <div className="flex justify-between"><span className="underline">{money(pricePerNight)} x {nights} night{nights > 1 ? 's' : ''}</span><span>{money(subtotal)}</span></div>
            <div className="flex justify-between"><span className="underline">Airbnb service fee</span><span>{money(serviceFee)}</span></div>
            <div className="flex justify-between"><span className="underline">Taxes</span><span>{money(taxes)}</span></div>
          </div>
          <div className="flex justify-between pt-3 mt-3 font-bold border-t">
            <span>Total</span>
            <span>{money(total)}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default BookingWidget;