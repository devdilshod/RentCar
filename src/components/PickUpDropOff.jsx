import React from 'react';
import { HiArrowsUpDown } from "react-icons/hi2";
import { getLocations, getDates, getTimes } from "../utils";

export default function PickUpDropOff({ 
    bookingType, setBookingType, 
    pickup, setPickup, 
    dropoff, setDropoff, 
    handleSwap 
}) {
    return (
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
                        className="select select-ghost w-full p-0 min-h-0 h-auto text-xs md:text-sm bg-transparent cursor-pointer"
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
                        className="select select-ghost w-full p-0 min-h-0 h-auto text-xs md:text-sm bg-transparent cursor-pointer"
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
                        className="select select-ghost w-full p-0 min-h-0 h-auto text-xs md:text-sm bg-transparent cursor-pointer"
                    >
                        <option value="">Select time</option>
                        {getTimes().map((time) => <option key={time}>{time}</option>)}
                    </select>
                </div>
            </div>
        </div>

        <button
            onClick={handleSwap}
            className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 bg-primary hover:bg-primary/90 text-white p-4 rounded-xl shadow-lg shadow-primary/20 transition-all z-20 flex items-center justify-center min-h-[56px] min-w-[56px] cursor-pointer">
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
                        className="select select-ghost w-full p-0 min-h-0 h-auto text-xs md:text-sm bg-transparent cursor-pointer"
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
                        className="select select-ghost w-full p-0 min-h-0 h-auto text-xs md:text-sm bg-transparent cursor-pointer"
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
                        className="select select-ghost w-full p-0 min-h-0 h-auto text-xs md:text-sm bg-transparent cursor-pointer"
                    >
                        <option value="">Select time</option>
                        {getTimes().map((time) => <option key={time}>{time}</option>)}
                    </select>
                </div>
            </div>
        </div>

    </div>
    );
}