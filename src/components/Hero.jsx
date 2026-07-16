import React, { useState } from 'react';
import { HiArrowsUpDown } from 'react-icons/hi2';
import CarCard from './CarCard';
import { getLocations, getDates, getTimes } from "../utils";

export default function Hero() {

    const [pickup, setPickup] = useState({ city: "", date: "", time: "" });
    const [dropoff, setDropoff] = useState({ city: "", date: "", time: "" });
    const [bookingType, setBookingType] = useState("pickup");

    const handleSwap = () => {
        setPickup(dropoff);
        setDropoff(pickup);
        setBookingType(prev => prev === "pickup" ? "dropoff" : "pickup");
    };

    return (
        <section className="w-full bg-base-200 px-6 py-8 md:px-16 transition-colors duration-300">
            <div className="max-w-[1440px] mx-auto flex flex-col gap-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <CarCard
                            id="white-car"
                            title="The Best Platform for Car Rental"
                            description="Ease of doing a car rental safely and reliably. Of course at a low price."
                            buttonText="Rental Car"
                            buttonColor="#3563E9"
                            bgColor="#54A6FF"
                            carImage="/images/image-1.png"
                            isGtrBg={false}
                            rotation="none"
                            imgClass="bottom-[-18%] right-[5%] md:right-[12%] md:bottom-[-14%] xl:bottom-[-8%] xl:right-[8%]"
                        />
                    </div>

                    <div className="hidden md:block">
                        <CarCard
                            id="nissan-gtr"
                            title="Easy way to rent a car at a low price"
                            description="Providing cheap car rental services and safe and comfortable facilities."
                            buttonText="Rental Car"
                            buttonColor="#54A6FF"
                            bgColor="#3563E9"
                            carImage="/images/image-2.png"
                            isGtrBg={true}
                            rotation="-180"
                            imgClass="bottom-[-18%] right-[5%] md:right-[10%] md:bottom-[-14%] xl:bottom-[-8%] xl:right-[8%]"
                        />
                    </div>


                </div>

                <div className="relative flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0 w-full mt-4">
                    <div className="w-full lg:w-[46%] bg-base-100 rounded-xl p-6 shadow-sm border border-base-300 transition-colors duration-300">
                        <div className="flex items-center gap-2 mb-4">
                            <input
                                type="radio"
                                name="booking-type"
                                id="pickup"
                                checked={bookingType === "pickup"}
                                onChange={() => setBookingType("pickup")}
                                className="radio radio-primary radio-sm"
                            />
                            <label htmlFor="pickup" className="text-base-content font-semibold text-base cursor-pointer">
                                Pick - Up
                            </label>
                        </div>

                        <div className="grid grid-cols-3 gap-4 border-t border-base-300 pt-4">
                            <div className="flex flex-col">
                                <span className="text-base-content font-bold text-sm md:text-base mb-1">Locations</span>
                                <select
                                    value={pickup.city}
                                    onChange={(e) => setPickup({ ...pickup, city: e.target.value })}
                                    className="select select-ghost w-full p-0 min-h-0 h-auto text-xs md:text-sm bg-transparent"
                                >
                                    <option value="">Select city</option>
                                    {getLocations().map((city) => <option key={city}>{city}</option>)}
                                </select>
                            </div>
                            <div className="flex flex-col border-l border-base-300 pl-4">
                                <span className="text-base-content font-bold text-sm md:text-base mb-1">Date</span>
                                <select
                                    value={pickup.date}
                                    onChange={(e) => setPickup({ ...pickup, date: e.target.value })}
                                    className="select select-ghost w-full p-0 min-h-0 h-auto text-xs md:text-sm bg-transparent"
                                >
                                    <option value="">Select date</option>
                                    {getDates().map((date) => <option key={date}>{date}</option>)}
                                </select>
                            </div>
                            <div className="flex flex-col border-l border-base-300 pl-4">
                                <span className="text-base-content font-bold text-sm md:text-base mb-1">Time</span>
                                <select
                                    value={pickup.time}
                                    onChange={(e) => setPickup({ ...pickup, time: e.target.value })}
                                    className="select select-ghost w-full p-0 min-h-0 h-auto text-xs md:text-sm bg-transparent"
                                >
                                    <option value="">Select time</option>
                                    {getTimes().map((time) => <option key={time}>{time}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleSwap}
                        className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 bg-[#3563E9] hover:bg-[#274ec7] text-white p-4 rounded-xl shadow-lg shadow-[#3562e969] transition-all z-20 flex items-center justify-center min-h-[56px] min-w-[56px] cursor-pointer">
                        <HiArrowsUpDown className="w-6 h-6" />
                    </button>

                    <div className="w-full lg:w-[46%] bg-base-100 rounded-xl p-6 shadow-sm border border-base-300 transition-colors duration-300">
                        <div className="flex items-center gap-2 mb-4">
                            <input
                                type="radio"
                                name="booking-type"
                                id="dropoff"
                                checked={bookingType === "dropoff"}
                                onChange={() => setBookingType("dropoff")}
                                className="radio radio-primary radio-sm"
                            />
                            <label htmlFor="dropoff" className="text-base-content font-semibold text-base cursor-pointer">
                                Drop - Off
                            </label>
                        </div>

                        <div className="grid grid-cols-3 gap-4 border-t border-base-300 pt-4">
                            <div className="flex flex-col">
                                <span className="text-base-content font-bold text-sm md:text-base mb-1">Locations</span>
                                <select
                                    value={dropoff.city}
                                    onChange={(e) => setDropoff({ ...dropoff, city: e.target.value })}
                                    className="select select-ghost w-full p-0 min-h-0 h-auto text-xs md:text-sm bg-transparent"
                                >
                                    <option value="">Select city</option>
                                    {getLocations().map((city) => <option key={city}>{city}</option>)}
                                </select>
                            </div>
                            <div className="flex flex-col border-l border-base-300 pl-4">
                                <span className="text-base-content font-bold text-sm md:text-base mb-1">Date</span>
                                <select
                                    value={dropoff.date}
                                    onChange={(e) => setDropoff({ ...dropoff, date: e.target.value })}
                                    className="select select-ghost w-full p-0 min-h-0 h-auto text-xs md:text-sm bg-transparent"
                                >
                                    <option value="">Select date</option>
                                    {getDates().map((date) => <option key={date}>{date}</option>)}
                                </select>
                            </div>
                            <div className="flex flex-col border-l border-base-300 pl-4">
                                <span className="text-base-content font-bold text-sm md:text-base mb-1">Time</span>
                                <select
                                    value={dropoff.time}
                                    onChange={(e) => setDropoff({ ...dropoff, time: e.target.value })}
                                    className="select select-ghost w-full p-0 min-h-0 h-auto text-xs md:text-sm bg-transparent"
                                >
                                    <option value="">Select time</option>
                                    {getTimes().map((time) => <option key={time}>{time}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}