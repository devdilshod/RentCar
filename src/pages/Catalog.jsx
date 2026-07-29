import React, { useState, useMemo } from 'react';
import PickUpDropOff from '../components/PickUpDropOff';
import CarRentalCard from '../components/CarRentalCard';
import CarFilter from '../components/CarFilter';
import { recommendationCars } from "../utils";
import { FiFilter, FiX } from "react-icons/fi";

export default function Catalog() {
    const [bookingType, setBookingType] = useState("pickup");
    const [pickup, setPickup] = useState({ city: "", date: "", time: "" });
    const [dropoff, setDropoff] = useState({ city: "", date: "", time: "" });

    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedCapacities, setSelectedCapacities] = useState([]);
    const [maxPrice, setMaxPrice] = useState(100);
    const [visibleCount, setVisibleCount] = useState(6);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    const handleSwap = () => {
        setPickup(dropoff);
        setDropoff(pickup);
        setBookingType(prev => prev === "pickup" ? "dropoff" : "pickup");
    };

    const filteredCars = useMemo(() => {
        return recommendationCars.filter(car => {
            const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(car.type);
            const carPeopleStr = String(car.people);
            const capacityMatch = selectedCapacities.length === 0 || selectedCapacities.some(cap => carPeopleStr.includes(cap));
            const priceMatch = car.price <= maxPrice;
            return typeMatch && capacityMatch && priceMatch;
        });
    }, [selectedTypes, selectedCapacities, maxPrice]);

    const displayedCars = filteredCars.slice(0, visibleCount);

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

                <main className="flex-1 w-full px-6 py-8 md:px-16 transition-colors duration-300 space-y-8">
                    <div className="w-full">
                        <PickUpDropOff
                            bookingType={bookingType} setBookingType={setBookingType}
                            pickup={pickup} setPickup={setPickup}
                            dropoff={dropoff} setDropoff={setDropoff}
                            handleSwap={handleSwap}
                        />
                    </div>

                    {filteredCars.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {displayedCars.map((car) => (
                                    <CarRentalCard
                                        key={car.id}
                                        car={car}
                                        rotation={car.flip ? "-180" : "none"}
                                        isRecommendation={true} 
                                    />
                                ))}
                            </div>

                            <div className="flex items-center justify-between pt-12 pb-6 relative">
                                <div className="absolute left-1/2 -translate-x-1/2">
                                    {visibleCount < filteredCars.length && (
                                        <button
                                            onClick={() => setVisibleCount(prev => prev + 6)}
                                            className="btn btn-primary px-6 text-white capitalize text-base h-[48px] min-h-[48px] cursor-pointer"
                                        >
                                            Show more car
                                        </button>
                                    )}
                                </div>

                                <div className="ml-auto text-base-content/60 font-medium text-sm">
                                    {filteredCars.length} Car{filteredCars.length !== 1 ? 's' : ''}
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="bg-base-100 p-8 rounded-2xl text-center text-base-content/60 shadow-sm">
                            No cars were found matching this filter.
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}