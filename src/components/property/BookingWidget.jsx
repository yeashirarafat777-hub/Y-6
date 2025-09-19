import { Star, ChevronDown } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// Utility: calculate nights between two YYYY-MM-DD dates
const getNights = (checkIn, checkOut) => {
  if (!checkIn || !checkOut) return 0;
  const start = new Date(`${checkIn}T00:00:00`);
  const end = new Date(`${checkOut}T00:00:00`);
  const diff = (end - start) / (1000 * 60 * 60 * 24);
  return Math.max(0, Math.round(diff));
};

// Utility: USD currency format
const formatUSD = (n) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

const BookingWidget = ({
  pricePerNight,
  rating,
  reviewsCount,
  feeRate = 0.14, // change if you want to match Airbnb’s numbers exactly
  taxRate = 0.07,
}) => {
  const [searchParams] = useSearchParams();
  const urlCheckIn = searchParams.get('check_in') || '';   // e.g., 2025-12-05
  const urlCheckOut = searchParams.get('check_out') || ''; // e.g., 2025-12-07

  const [checkIn, setCheckIn] = useState(urlCheckIn);
  const [checkOut, setCheckOut] = useState(urlCheckOut);
  const [guests, setGuests] = useState(1);

  const nights = useMemo(() => getNights(checkIn, checkOut), [checkIn, checkOut]);
  const subtotal = nights * pricePerNight;
  const serviceFee = Math.round(subtotal * feeRate);
  const taxes = Math.round(subtotal * taxRate);
  const total = subtotal + serviceFee + taxes;

  const reserveDisabled = nights <= 0;

  const handleReserve = () => {
    if (reserveDisabled) {
      alert('Please select valid Check-in and Check-out dates.');
      return;
    }
    // TODO: integrate login/checkout route
    alert(`Reserved for ${nights} night(s), ${guests} guest(s).\nTotal: ${formatUSD(total)}`);
  };

  return (
    <div className="sticky top-28 border rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-baseline mb-4">
        <div>
          <span className="text-2xl font-bold">{formatUSD(pricePerNight)}</span>
          <span className="text-gray-600"> night</span>
        </div>
        <div className="flex items-center text-sm">
          <Star className="text-black" fill="currentColor" size={14} />
          <span className="font-semibold ml-1">{rating}</span>
          <span className="text-gray-500 ml-2 underline">· {reviewsCount} reviews</span>
        </div>
      </div>

      <div className="border rounded-lg grid grid-cols-2">
        <div className="p-3 border-r">
          <label htmlFor="checkin" className="block text-xs font-semibold uppercase">
            Check-in
          </label>
          <input
            id="checkin"
            type="date"
            value={checkIn}
            onChange={(e) => {
              const v = e.target.value;
              setCheckIn(v);
              if (checkOut && new Date(v) >= new Date(checkOut)) {
                // auto-adjust checkout to be after checkin
                const next = new Date(v);
                next.setDate(next.getDate() + 1);
                setCheckOut(next.toISOString().slice(0, 10));
              }
            }}
            className="w-full outline-none text-sm"
          />
        </div>
        <div className="p-3">
          <label htmlFor="checkout" className="block text-xs font-semibold uppercase">
            Check-out
          </label>
          <input
            id="checkout"
            type="date"
            min={checkIn || undefined}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full outline-none text-sm"
          />
        </div>
        <div className="col-span-2 p-3 border-t flex justify-between items-center">
          <div>
            <label htmlFor="guests" className="block text-xs font-semibold uppercase">
              Guests
            </label>
            <select
              id="guests"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="outline-none text-sm"
            >
              {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {n} guest{n > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>
          <ChevronDown />
        </div>
      </div>

      <button
        onClick={handleReserve}
        disabled={reserveDisabled}
        className={`w-full bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold py-3 rounded-lg mt-4 transition
          ${reserveDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}
      >
        Reserve
      </button>
      <p className="text-center text-sm text-gray-500 mt-3">You won't be charged yet</p>

      {nights > 0 && (
        <>
          <div className="mt-4 space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span className="underline">
                {formatUSD(pricePerNight)} x {nights} night{nights > 1 ? 's' : ''}
              </span>
              <span>{formatUSD(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="underline">Airbnb service fee</span>
              <span>{formatUSD(serviceFee)}</span>
            </div>
            <div className="flex justify-between">
              <span className="underline">Taxes</span>
              <span>{formatUSD(taxes)}</span>
            </div>
          </div>
          <div className="flex justify-between font-bold border-t pt-4 mt-4">
            <span>Total</span>
            <span>{formatUSD(total)}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default BookingWidget;