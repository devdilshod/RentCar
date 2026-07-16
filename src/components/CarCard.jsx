import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CarCard({ imgClass, id, title, rotation, description, buttonText, buttonColor, bgColor, carImage, isGtrBg }) {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/category');
    };

    return (
        <div
            className="text-white rounded-xl p-6 md:p-8 flex flex-col justify-between h-auto min-h-[280px] md:min-h-[360px] relative overflow-hidden shadow-sm transition-all duration-300"
            style={{ backgroundColor: bgColor }}
        >

            {!isGtrBg && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute rounded-full border-[20px] border-white/5" style={{ width: '775px', height: '775px', top: '-83px', left: '-157px' }} />
                    <div className="absolute rounded-full border-[20px] border-white/5" style={{ width: '625px', height: '625px', top: '-8px', left: '-82px' }} />
                    <div className="absolute rounded-full border-[20px] border-white/5" style={{ width: '475px', height: '475px', top: '67px', left: '-7px' }} />
                    <div className="absolute rounded-full border-[20px] border-white/5" style={{ width: '325px', height: '325px', top: '142px', left: '68px' }} />
                </div>
            )}

            {isGtrBg && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute rounded-full border-[20px] border-white/5" style={{ width: '775px', height: '775px', top: '-83px', left: '-157px' }} />
                    <div className="absolute rounded-full border-[20px] border-white/5" style={{ width: '625px', height: '625px', top: '-8px', left: '-82px' }} />
                    <div className="absolute rounded-full border-[20px] border-white/5" style={{ width: '475px', height: '475px', top: '67px', left: '-7px' }} />
                    <div className="absolute rounded-full border-[20px] border-white/5" style={{ width: '325px', height: '325px', top: '142px', left: '68px' }} />
                </div>
            )}

            <div className="max-w-[320px] z-10">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold leading-tight tracking-tight mb-4">
                    {title}
                </h2>
                <p className="text-sm sm:text-base md:text-xl opacity-80 mb-5">
                    {description}
                </p>
                <button
                    onClick={handleButtonClick}
                    className="text-white font-medium text-sm md:text-base px-5 py-3 rounded-md transition-all shadow-md active:scale-95 cursor-pointer"
                    style={{ backgroundColor: buttonColor }}
                >
                    {buttonText}
                </button>
            </div>

            <img
                src={carImage}
                alt={title}
                className={`absolute z-20 object-contain pointer-events-none transition-all duration-300 ${imgClass} ${rotation === "-180" ? "scale-x-[-1]" : ""
                    }`}
                style={{
                    width: '400px',
                    height: '250px',
                }}
            />
        </div>
    );
}