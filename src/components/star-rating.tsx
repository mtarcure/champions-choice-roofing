import { Star } from "lucide-react";

export function StarRating({ rating = 5, size = 16 }: { rating?: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < rating ? "fill-amber-400 text-amber-400" : "text-zinc-600"}
        />
      ))}
    </div>
  );
}
