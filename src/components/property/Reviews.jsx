import { Star } from 'lucide-react';

const ReviewCard = ({ review }) => (
    <div>
        <div className="flex items-center space-x-4">
            <img src={review.authorAvatar} alt={review.author} className="w-10 h-10 rounded-full" />
            <div>
                <p className="font-semibold">{review.author}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
            </div>
        </div>
        <p className="mt-3 text-gray-700 line-clamp-3">{review.comment}</p>
    </div>
);

const Reviews = ({ rating, reviewsCount, reviews }) => {
    return (
        <div className="py-8 border-b">
            <div className="flex items-center mb-6">
                <Star className="text-black" fill="currentColor" size={20} />
                <h2 className="text-2xl font-semibold ml-2">{rating} · {reviewsCount} reviews</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                {reviews.slice(0, 4).map((review, index) => (
                    <ReviewCard key={index} review={review} />
                ))}
            </div>
             <button className="mt-8 border border-black text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition">
                Show all {reviewsCount} reviews
            </button>
        </div>
    )
}

export default Reviews;