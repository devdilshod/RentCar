import React, { useState, useMemo } from 'react';
import PickUpDropOff from '../components/PickUpDropOff';
import CarRentalCard from '../components/CarRentalCard';
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
        <div className="min-h-screen bg-[#F6F7F9] flex flex-col">

            <div className="xl:hidden px-6 py-4 bg-base-100 border-b border-base-300 flex justify-between items-center shadow-sm">
                <span className="font-bold text-base-content text-lg">Filters Menu</span>
                <button
                    onClick={() => setIsMobileFilterOpen(true)}
                    className="btn btn-sm btn-primary text-white flex items-center gap-2"
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
                            className="btn btn-sm btn-ghost text-base-content p-1"
                        >
                            <FiX className="w-6 h-6" />
                        </button>
                    </div>

                    <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Type</h2>
                    {['Sport', 'SUV', 'MPV', 'Sedan', 'Coupe', 'Hatchback'].map(type => (
                        <label key={type} className="flex items-center gap-3 mb-6 cursor-pointer">
                            <input
                                type="checkbox"
                                className="checkbox checkbox-primary rounded-md"
                                checked={selectedTypes.includes(type)}
                                onChange={() => setSelectedTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type])}
                            />
                            <span className="text-lg xl:text-xl font-semibold text-base-content">
                                {type} <span className="text-gray-400 text-sm font-normal">({recommendationCars.filter(c => c.type === type).length})</span>
                            </span>
                        </label>
                    ))}

                    <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-12 mb-6">Capacity</h2>
                    {['2', '4', '6', '8'].map(cap => (
                        <label key={cap} className="flex items-center gap-3 mb-6 cursor-pointer">
                            <input
                                type="checkbox"
                                className="checkbox checkbox-primary rounded-md"
                                checked={selectedCapacities.includes(cap)}
                                onChange={() => setSelectedCapacities(prev => prev.includes(cap) ? prev.filter(c => c !== cap) : [...prev, cap])}
                            />
                            <span className="text-lg xl:text-xl font-semibold text-base-content">
                                {cap === '8' ? '8 or More' : `${cap} Person`}
                                <span className="text-gray-400 text-sm font-normal">
                                    ({recommendationCars.filter(c => String(c.people).includes(cap)).length})
                                </span>
                            </span>
                        </label>
                    ))}

                    <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-12 mb-6">Price</h2>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                        className="range range-primary range-sm w-full"
                    />
                    <div className="text-lg xl:text-xl font-semibold text-base-content mt-4">Max. ${maxPrice}.00</div>
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayedCars.map((car) => (
                            <CarRentalCard key={car.id} car={car} rotation={car.flip ? "-180" : "none"} />
                        ))}
                    </div>

                    <div className="flex items-center justify-between pt-12 pb-6 relative">
                        <div className="absolute left-1/2 -translate-x-1/2">
                            {visibleCount < filteredCars.length && (
                                <button
                                    onClick={() => setVisibleCount(prev => prev + 6)}
                                    className="btn btn-primary px-6 text-white capitalize text-base h-[48px] min-h-[48px]"
                                >
                                    Show more car
                                </button>
                            )}
                        </div>

                        <div className="ml-auto text-gray-400 font-medium text-sm">
                            {filteredCars.length} Car{filteredCars.length !== 1 ? 's' : ''}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}