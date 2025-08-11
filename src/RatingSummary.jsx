import React from "react";
import { Star } from "lucide-react";

const RatingSummary = ({ average = 4.9, counts = [80, 15, 0, 2, 3] }) => {
  const total = counts.reduce((a, b) => a + b, 0);
  const maxWidth = 200; // change based on your layout

  return (
    <div className="flex items-center gap-6">
      {/* Average Rating + Stars */}
      <div className="flex flex-col items-center min-w-[60px]">
        <div className="text-4xl font-bold leading-tight">{average.toFixed(1)}</div>
        <div className="flex items-center mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-green-600 stroke-green-600"
            />
          ))}
        </div>
      </div>

      {/* Rating Breakdown */}
      <div className="flex flex-col gap-1">
        {counts.map((count, index) => {
          const rating = 5 - index;
          const percent = total ? (count / total) * 100 : 0;

          return (
            <div key={rating} className="flex items-center gap-2">
              <span className="w-4 text-xs text-gray-600">{rating}</span>
              <div className="relative w-[160px] h-2 bg-gray-200 rounded overflow-hidden">
                <div
                  className="absolute h-2 bg-green-600 rounded"
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RatingSummary;
