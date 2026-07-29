import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaUsers, FaGasPump, FaCog } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export default function CarRentalCard({ car, rotation = "none", isRecommendation = false, onToggleFavorite }) {
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState(() => {
        const saved = localStorage.getItem('carFavorites');
        if (saved) {
            const favorites = JSON.parse(saved);
            return favorites.some(item => item.id === car.id);
        }
        return false;
    });

    const flipClass = rotation === "-180" ? "scale-x-[-1]" : "";

    const handleToggleFavorite = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const saved = localStorage.getItem('carFavorites');
        let favorites = saved ? JSON.parse(saved) : [];

        if (isFavorite) {
            favorites = favorites.filter(item => item.id !== car.id);
            setIsFavorite(false);
        } else {
            favorites.push(car);
            setIsFavorite(true);
        }

        localStorage.setItem('carFavorites', JSON.stringify(favorites));

        if (onToggleFavorite) {
            onToggleFavorite(car);
        }
    };

    const handleCardClick = () => {
        navigate(`/car/${car.id}`);
    };

    return (
        <div 
            onClick={handleCardClick}
            className="bg-base-100 rounded-xl p-6 flex flex-col justify-between h-full w-full min-h-[380px] cursor-pointer shadow-sm hover:shadow-md transition-shadow"
        >
            <div className="flex items-start justify-between">
                <div>
                    <h3 className="text-xl font-bold text-base-content">{car.name}</h3>
                    <p className="text-sm text-base-content/60">{car.type}</p>
                </div>

                <button
                    type="button"
                    onClick={handleToggleFavorite}
                    className="p-2 cursor-pointer bg-transparent border-none outline-none focus:outline-none hover:scale-110 transition-transform z-10"
                >
                    {isFavorite ? (
                        <FaHeart size={24} className="text-[#ED3F3F]" />
                    ) : (
                        <FaRegHeart size={24} className="text-base-content/40 transition-colors" />
                    )}
                </button>
            </div>

            <div className={`my-6 flex flex-grow items-center justify-between gap-6 
                ${isRecommendation ? 'flex-row md:flex-col' : 'flex-col'} 
            `}>
                <div className="flex-1 flex justify-center items-center relative">
                    <img
                        src={car.image}
                        alt={car.name}
                        className={`w-full max-w-[220px] object-contain transition-transform duration-300 ${flipClass}`}
                    />
                </div>

                <div className={`flex gap-3 text-sm text-base-content/60 
                    ${isRecommendation ? 'flex-col md:flex-row md:w-full md:justify-between' : 'w-full md:justify-between'}
                `}>
                    <div className="flex items-center gap-2">
                        <FaGasPump size={20} className="text-base-content/50" />
                        <span>{car.gasoline}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCog size={20} className="text-base-content/50" />
                        <span>{car.transmission}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaUsers size={20} className="text-base-content/50" />
                        <span>{car.people}</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between mt-auto pt-4">
                <div>
                    <span className="text-xl font-bold text-base-content">${car.price.toFixed(2)} / </span>
                    <span className="text-sm text-base-content/60">day</span>
                    {car.oldPrice && (
                        <p className="text-sm text-base-content/40 line-through">${car.oldPrice.toFixed(2)}</p>
                    )}
                </div>
                <Link to={`/checkout/${car.id}`} onClick={(e) => e.stopPropagation()}>
                    <button className="btn btn-primary px-6 rounded-lg text-white capitalize text-sm h-[44px] min-h-[44px]">
                        Rent Now
                    </button>
                </Link>
            </div>
        </div>
    );
}