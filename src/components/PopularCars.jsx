import React from 'react';
import CarRentalCard from './CarRentalCard';
import { carsData } from "../utils";
import SectionTitle from './SectionTitle';

export default function PopularCars() {
    
    const popularCars = carsData;

    return (
        <section className="w-full bg-base-200 px-6 py-8 md:px-16 transition-colors duration-300 mt-4">
            <div className="max-w-[1440px] mx-auto">
                
            <SectionTitle title="Popular Car" to="/catalog" />

                <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:overflow-visible">
                    {popularCars.map((car) => (
                        <div key={car.id} className="min-w-[280px] md:min-w-0">
                            <CarRentalCard 
                                car={car} 
                                rotation={car.flip ? "-180" : "none"} 
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}