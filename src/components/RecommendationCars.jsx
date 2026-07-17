import React from 'react';
import SectionTitle from './SectionTitle';
import CarRentalCard from './CarRentalCard';
import { recommendationCars } from "../utils";
import { Link } from 'react-router-dom';

export default function RecommendationCars() {

    const totalCars = recommendationCars.length;

    return (
        <section className="w-full px-4 py-8 md:px-16 mt-4">
            <div className="max-w-[1440px] mx-auto">
                <SectionTitle title="Recommendation Car" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {recommendationCars.slice(0, 8).map((car) => (
                        <CarRentalCard
                            key={car.id}
                            car={car}
                            rotation={car.flip ? "-180" : "none"}
                            isRecommendation={true}
                        />
                    ))}
                </div>

                <div className="relative flex justify-center items-center mt-12 w-full">
                    <Link to="/category">
                        <button className="btn btn-primary text-white capitalize px-8 py-3">
                            Show more car
                        </button>
                    </Link>
                    <span className="absolute right-0 text-base-content/60 font-medium md:mr-4">
                        {totalCars} Cars
                    </span>
                </div>
            </div>
        </section>
    );
}