import { Star } from "lucide-react";

export function StarRating({ rating = 5, size = 20 }: { rating?: number; size?: number }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          aria-hidden="true"
          className={i < rating ? "fill-[#D4A843] text-[#D4A843]" : "text-gray-300"}
        />
      ))}
    </div>
  );
}
