import React, { useState } from 'react';
import CarCard from './CarCard';
import PickUpDropOff from '../components/PickUpDropOff';

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
        <section className="w-full  px-6 py-8 md:px-16 transition-colors duration-300">
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

                <PickUpDropOff
                    bookingType={bookingType}
                    setBookingType={setBookingType}
                    pickup={pickup}
                    setPickup={setPickup}
                    dropoff={dropoff}
                    setDropoff={setDropoff}
                    handleSwap={handleSwap}
                />

            </div>
        </section>
    );
}