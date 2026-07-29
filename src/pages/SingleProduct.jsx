import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';
import { FiFilter, FiX } from 'react-icons/fi';
import CarFilter from '../components/CarFilter';
import CarRentalCard from '../components/CarRentalCard';
import ProductReviews from '../components/ProductReviews';
import { carsData, recommendationCars } from '../utils';

export default function SingleProduct() {
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [activeImage, setActiveImage] = useState('');
    const [isLiked, setIsLiked] = useState(false);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedCapacities, setSelectedCapacities] = useState([]);
    const [maxPrice, setMaxPrice] = useState(100);

    const allCars = [...carsData, ...recommendationCars];

    useEffect(() => {
        const foundCar = allCars.find(c => String(c.id) === String(id));

        if (foundCar) {
            const enrichedCar = {
                ...foundCar,
                images: foundCar.images || [foundCar.image, "/images/salon-1.png", "/images/salon-2.png"],
                description: foundCar.description || `${foundCar.name} has become the embodiment of outstanding performance, comfort, and safety.`,
                transmission: foundCar.transmission || "Manual",
                people: foundCar.people || "2 People",
                reviewsCount: foundCar.reviewsCount || 440,
                oldPrice: foundCar.oldPrice || (foundCar.price ? foundCar.price * 1.25 : 100.00)
            };
            setCar(enrichedCar);
            setActiveImage(enrichedCar.image);

            const saved = localStorage.getItem('carFavorites');
            if (saved) {
                const favorites = JSON.parse(saved);
                setIsLiked(favorites.some(item => String(item.id) === String(foundCar.id)));
            }
        }
    }, [id]);

    const handleLikeToggle = () => {
        if (!car) return;
        const newLikedState = !isLiked;
        setIsLiked(newLikedState);

        const saved = localStorage.getItem('carFavorites');
        let favorites = saved ? JSON.parse(saved) : [];

        if (newLikedState) {
            if (!favorites.some(item => String(item.id) === String(car.id))) {
                favorites.push(car);
            }
        } else {
            favorites = favorites.filter(item => String(item.id) !== String(car.id));
        }

        localStorage.setItem('carFavorites', JSON.stringify(favorites));
    };

    if (!car) return <div className="min-h-screen flex items-center justify-center text-base-content text-xl">Car not found...</div>;

    const filteredCars = allCars.filter(item => {
        if ((item.price || 0) > maxPrice) return false;
        if (selectedTypes.length > 0 && !selectedTypes.some(t => item.type?.toLowerCase().includes(t.toLowerCase()))) return false;
        if (selectedCapacities.length > 0 && !selectedCapacities.some(cap => String(item.people || item.capacity || '').includes(cap))) return false;
        return true;
    });

    return (
        <div className="min-h-screen bg-base-200 flex flex-col transition-colors duration-300">

            <div className="xl:hidden px-6 py-4 bg-base-100 border-b border-base-300 flex justify-between items-center shadow-sm">
                <span className="font-bold text-base-content text-lg">Filters Menu</span>
                <button
                    onClick={() => setIsMobileFilterOpen(true)}
                    className="btn btn-sm btn-primary text-white flex items-center gap-2 cursor-pointer"
                >
                    <FiFilter className="w-4 h-4" />
                    Filters
                </button>
            </div>

            <div className="flex flex-col xl:flex-row w-full relative">

                <aside className={`
                    fixed xl:static inset-y-0 left-0 z-50 min-w-[240px] bg-base-100 border-r border-base-300 p-6 xl:p-8 shrink-0 overflow-y-auto transition-transform duration-300 shadow-2xl xl:shadow-none
                    ${isMobileFilterOpen ? 'translate-x-0' : '-translate-x-full xl:translate-x-0'}
                `}>
                    <div className="flex justify-between items-center xl:hidden mb-6">
                        <span className="font-bold text-base-content text-lg">Filter Options</span>
                        <button
                            onClick={() => setIsMobileFilterOpen(false)}
                            className="btn btn-sm btn-ghost text-base-content p-1 cursor-pointer"
                        >
                            <FiX className="w-6 h-6" />
                        </button>
                    </div>

                    <CarFilter
                        selectedTypes={selectedTypes}
                        setSelectedTypes={setSelectedTypes}
                        selectedCapacities={selectedCapacities}
                        setSelectedCapacities={setSelectedCapacities}
                        maxPrice={maxPrice}
                        setMaxPrice={setMaxPrice}
                    />
                </aside>

                <main className="flex-1 w-full px-6 py-6 md:px-16 transition-colors duration-300 space-y-6 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="bg-base-100 rounded-2xl p-5 md:p-6 flex flex-col justify-between min-h-[260px] md:min-h-[300px] shadow-sm">
                                <div className="max-w-[320px] space-y-1">
                                    <h2 className="text-xl sm:text-2xl font-semibold">{car.bannerTitle || "Sports car with the best design"}</h2>
                                    <p className="text-xs sm:text-sm text-base-content/60">{car.bannerDescription || "Safety and comfort while driving"}</p>
                                </div>
                                <div className="flex justify-center my-2">
                                    <img
                                        src={activeImage}
                                        alt={car.name}
                                        className="object-contain"
                                        style={{
                                            width: '350px',
                                            height: '140px',
                                            transform: car.flip ? "scaleX(-1)" : "none"
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-3">
                                {car.images?.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveImage(img)}
                                        className={`border-2 rounded-xl p-2 bg-base-100 flex items-center justify-center h-20 cursor-pointer ${activeImage === img ? 'border-primary' : 'border-transparent'}`}
                                    >
                                        <img
                                            src={img}
                                            alt=""
                                            className="max-h-full object-contain"
                                            style={{
                                                transform: (car.flip && index === 0) ? "scaleX(-1)" : "none"
                                            }}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-base-100 p-6 md:p-8 rounded-2xl shadow-sm flex flex-col justify-between">
                            <div className="space-y-5">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h1 className="text-2xl sm:text-3xl font-bold">{car.name}</h1>
                                        <div className="flex items-center gap-1 text-sm mt-1">
                                            {[...Array(5)].map((_, i) => (<FaStar key={i} className="text-[#F59E0B]" />))}
                                            <span className="text-base-content/60 ml-2">{car.reviewsCount}+ Reviewer</span>
                                        </div>
                                    </div>
                                    <button onClick={handleLikeToggle} className="text-[#ED3F3F] cursor-pointer">
                                        {isLiked ? <FaHeart size={24} /> : <FaRegHeart size={24} className="text-base-content/40" />}
                                    </button>
                                </div>

                                <p className="text-base-content/60 text-sm leading-relaxed">{car.description}</p>

                                <div className="grid grid-cols-2 gap-x-6 gap-y-4 pt-2">
                                    {[
                                        { label: "Type Car", value: car.type },
                                        { label: "Capacity", value: car.people },
                                        { label: "Steering", value: car.transmission },
                                        { label: "Gasoline", value: car.gasoline },
                                    ].map((item, index) => (
                                        <div key={index} className="flex justify-between items-center text-sm">
                                            <span className="text-base-content/40">{item.label}</span>
                                            <span className="font-semibold text-base-content/80">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-8 mt-8 border-t border-base-200/50">
                                <div>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-2xl font-bold">${car.price.toFixed(2)}</span>
                                        <span className="text-xs text-base-content/60">/ days</span>
                                    </div>
                                    {car.oldPrice && <span className="text-sm text-base-content/40 line-through">${car.oldPrice.toFixed(2)}</span>}
                                </div>
                                <Link to={`/checkout/${car.id}`}>
                                    <button className="btn btn-primary px-8 text-white cursor-pointer">Rent Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <ProductReviews />

                    <div className="pt-2">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-base font-semibold text-base-content/50">
                                {selectedTypes.length > 0 || selectedCapacities.length > 0 ? "Filtered Cars" : "Recent Car"}
                            </h3>
                            <Link to="/catalog" className="text-primary font-semibold text-sm hover:underline">View All</Link>
                        </div>

                        {filteredCars.length > 0 ? (
                            <div className="flex xl:grid xl:grid-cols-3 gap-6 overflow-x-auto xl:overflow-x-visible pb-4 xl:pb-0 snap-x snap-mandatory scrollbar-none">
                                {filteredCars.slice(0, 6).map((carItem) => (
                                    <div key={carItem.id} className="min-w-[280px] sm:min-w-[320px] xl:min-w-0 snap-start shrink-0">
                                        <CarRentalCard
                                            car={carItem}
                                            rotation={carItem.flip ? "-180" : "none"}
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-base-100 p-8 rounded-2xl text-center text-base-content/60 shadow-sm">
                                No cars were found matching this filter.
                            </div>
                        )}
                    </div>

                </main>
            </div>
        </div>
    );
}