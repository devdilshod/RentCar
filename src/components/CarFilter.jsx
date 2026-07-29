import React from 'react';
import { carsData, recommendationCars } from "../utils";

export default function CarFilter({ 
    selectedTypes, 
    setSelectedTypes, 
    selectedCapacities, 
    setSelectedCapacities, 
    maxPrice, 
    setMaxPrice 
}) {
    const allCars = [...carsData, ...recommendationCars];

    return (
        <div className="w-full space-y-6">
            <div>
                <h2 className="text-xs font-bold text-base-content/60 uppercase tracking-widest mb-6">Type</h2>
                {['Sport', 'SUV', 'MPV', 'Sedan', 'Coupe', 'Hatchback'].map(type => (
                    <label key={type} className="flex items-center gap-3 mb-6 cursor-pointer">
                        <input
                            type="checkbox"
                            className="checkbox checkbox-primary rounded-md"
                            checked={selectedTypes.includes(type)}
                            onChange={() => setSelectedTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type])}
                        />
                        <span className="text-lg xl:text-xl font-semibold text-base-content">
                            {type} <span className="text-base-content/60 text-sm font-normal">({allCars.filter(c => c.type?.toLowerCase() === type.toLowerCase()).length})</span>
                        </span>
                    </label>
                ))}
            </div>

            <div>
                <h2 className="text-xs font-bold text-base-content/60 uppercase tracking-widest mt-12 mb-6">Capacity</h2>
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
                            <span className="text-base-content/60 text-sm font-normal">
                                ({allCars.filter(c => String(c.people || c.capacity).includes(cap)).length})
                            </span>
                        </span>
                    </label>
                ))}
            </div>
            
            <div>
                <h2 className="text-xs font-bold text-base-content/60 uppercase tracking-widest mt-12 mb-6">Price</h2>
                <input
                    type="range"
                    min="0"
                    max="150"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="range range-primary range-sm w-full"
                />
                <div className="text-lg xl:text-xl font-semibold text-base-content mt-4">Max. ${maxPrice}.00</div>
            </div>
        </div>
    );
}