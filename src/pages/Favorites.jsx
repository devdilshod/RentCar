import React, { useState, useEffect } from 'react';
import CarRentalCard from '../components/CarRentalCard';
import { Link } from 'react-router-dom';

export default function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem('carFavorites');
        if (saved) {
            setFavorites(JSON.parse(saved));
        }
    }, []);

    const handleRemoveFavorite = (car) => {
        setFavorites(prev => prev.filter(item => item.id !== car.id));
    };

    return (
        <div className="min-h-screen bg-base-200 px-6 py-8 md:px-16 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold text-base-content mb-6">My Favorite Cars</h1>

                {favorites.length === 0 ? (
                    <div className="text-center py-20 bg-base-100 rounded-xl shadow-sm">
                        <p className="text-lg text-base-content/60 mb-4">No favorite cars yet.</p>
                        <Link to="/catalog" className="btn btn-primary text-white capitalize">
                        View cars
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {favorites.map((car) => (
                            <CarRentalCard 
                                key={car.id} 
                                car={car} 
                                rotation={car.flip ? "-180" : "none"} 
                                onToggleFavorite={handleRemoveFavorite}
                                isRecommendation={true}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}