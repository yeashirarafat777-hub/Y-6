import { Star } from 'lucide-react';

const ReviewCard = ({ review }) => (
  <div>
    <div className="flex items-center gap-4">
      <img src={review.authorAvatar} alt={review.author} className="w-10 h-10 rounded-full" />
      <div>
        <p className="font-semibold">{review.author}</p>
        <p className="text-xs text-gray-500 sm:text-sm">{review.date}</p>
      </div>
    </div>
    <p className="mt-3 text-sm text-gray-700 sm:text-base">{review.comment}</p>
  </div>
);

const Reviews = ({ rating, reviewsCount, reviews }) => {
  return (
    <div className="py-6 border-b sm:py-8">
      <div className="flex items-center mb-4 sm:mb-6">
        <Star className="text-black" fill="currentColor" size={20} />
        <h2 className="ml-2 text-xl font-semibold sm:text-2xl">{rating} · {reviewsCount} reviews</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 sm:gap-x-16 sm:gap-y-8">
        {reviews.map((review, index) => <ReviewCard key={index} review={review} />)}
      </div>
      <button className="mt-6 sm:mt-8 border border-black text-black font-semibold py-2.5 px-5 sm:py-3 sm:px-6 rounded-lg hover:bg-gray-100 transition">
        Show all {reviewsCount} reviews
      </button>
    </div>
  );
};
export default Reviews;