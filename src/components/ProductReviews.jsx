import React from 'react';
import { FaStar, FaUser } from 'react-icons/fa';
import { FaArrowDownLong } from "react-icons/fa6";

function ReviewItem({ name, role, date, rating, comment }) {
    return (
        <div className="pt-4 first:pt-0">
            <div className="flex justify-between items-start">
                <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full bg-base-200 flex items-center justify-center text-base-content/60 shrink-0">
                        <FaUser size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-base-content">{name}</h4>
                        <p className="text-xs text-base-content/50">{role}</p>
                    </div>
                </div>
                <div className="text-right">
                    <span className="text-xs text-base-content/40">{date}</span>
                    <div className="flex gap-1 mt-1 text-[#F59E0B]">
                        {[...Array(5)].map((_, i) => (
                            <FaStar 
                                key={i} 
                                size={14} 
                                className={i < rating ? "text-[#F59E0B]" : "text-base-content/30"} 
                            />
                        ))}
                    </div>
                </div>
            </div>
            <p className="text-sm text-base-content/70 mt-3 leading-relaxed">
                {comment}
            </p>
        </div>
    );
}

export default function ProductReviews() {
    return (
        <div className="bg-base-100 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
                <h3 className="text-xl font-bold text-base-content">Reviews</h3>
                <span className="bg-primary text-white text-xs font-semibold px-2.5 py-1 rounded-md">13</span>
            </div>

            <div className="space-y-6 divide-y divide-base-200">
                <ReviewItem 
                    name="Alex Stanton"
                    role="CEO at Bukalapak"
                    date="21 July 2022"
                    rating={4}
                    comment="We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite."
                />
                <ReviewItem 
                    name="Skylar Dias"
                    role="CEO at Amazon"
                    date="20 July 2022"
                    rating={3}
                    comment="We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite."
                />
            </div>

            <div className="text-center mt-6">
                <button className="text-sm font-semibold text-base-content/50 hover:text-primary transition-colors cursor-pointer inline-flex items-center gap-2">
                    Show All <FaArrowDownLong />
                </button>
            </div>
        </div>
    );
}