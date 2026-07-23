import React, { useState } from 'react';
import PickUpDropOff from '../components/PickUpDropOff';
import CarRentalCard from '../components/CarRentalCard';
import { recommendationCars } from "../utils";

export default function Catalog() {
    const [bookingType, setBookingType] = useState("pickup");
    const [pickup, setPickup] = useState({ city: "", date: "", time: "" });
    const [dropoff, setDropoff] = useState({ city: "", date: "", time: "" });

    const handleSwap = () => {
        setPickup(dropoff);
        setDropoff(pickup);
        setBookingType(prev => prev === "pickup" ? "dropoff" : "pickup");
    };

    return (
        <div className="min-h-screen p-4 lg:p-8">
            <main className="max-w-[1200px] mx-auto space-y-8">
                <PickUpDropOff
                    bookingType={bookingType} setBookingType={setBookingType}
                    pickup={pickup} setPickup={setPickup}
                    dropoff={dropoff} setDropoff={setDropoff}
                    handleSwap={handleSwap}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recommendationCars.slice(0, 6).map((car) => (
                        <CarRentalCard
                            key={car.id}
                            car={car}
                            rotation={car.flip ? "-180" : "none"} />
                    ))}
                </div>
            </main>
        </div>
    );
}