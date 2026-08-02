import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaPaypal, FaBitcoin } from 'react-icons/fa';
import { carsData, recommendationCars, getLocations, getDates, getTimes } from '../utils';
import { toast } from 'react-toastify';
import { RiVisaLine } from "react-icons/ri";
import { MdOutlineSecurity } from "react-icons/md";

export default function Checkout() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [car, setCar] = useState(null);

    const [bookingType, setBookingType] = useState('pickup');
    const [pickup, setPickup] = useState({ city: '', date: '', time: '' });
    const [dropoff, setDropoff] = useState({ city: '', date: '', time: '' });

    const [promoInput, setPromoInput] = useState('');
    const [discount, setDiscount] = useState(0);

    const [formData, setFormData] = useState({
        name: '', phone: '', address: '', city: '',
        paymentMethod: 'creditCard',
        cardNumber: '', expirationDate: '', cardHolder: '', cvc: '',
        marketingConsent: false, termsConsent: false
    });

    useEffect(() => {
        const foundCar = [...carsData, ...recommendationCars].find(c => String(c.id) === String(id));
        if (foundCar) setCar(foundCar);
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleApplyPromo = (e) => {
        e.preventDefault();
        const code = promoInput.trim().toUpperCase();
        if (!code) return toast.error('Please enter a promo code!');

        if (code === 'DISCOUNT10') {
            setDiscount(0.1);
            toast.success('Promo code applied successfully! 10% discount added.');
        } else if (code === 'SALE20') {
            setDiscount(0.2);
            toast.success('Promo code applied successfully! 20% discount added.');
        } else {
            toast.error('Invalid promo code!');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (!isLoggedIn) {
            toast.error('Missing or invalid credentials');
            navigate('/login');
            return;
        }
        toast.success('Rental order successfully placed!');
        navigate('/catalog');
    };

    if (!car) {
        return <div className="min-h-screen flex items-center justify-center text-xl">Loading car details...</div>;
    }

    const basePrice = car.price || 0;
    const discountAmount = basePrice * discount;
    const totalRentalPrice = basePrice - discountAmount;

    return (
        <div className="min-h-screen bg-base-200/60 py-10 px-4 md:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start grid-flow-dense">

                <div className="space-y-6 lg:col-start-3 w-full">
                    <div className="bg-base-100 p-6 md:p-8 rounded-2xl shadow-sm space-y-6 lg:sticky lg:top-6">
                        <div>
                            <h2 className="text-lg md:text-xl font-bold">Rental Summary</h2>
                            <p className="text-xs md:text-sm text-base-content/65">Prices may change depending on the length of the price and the date of your rental.</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-4 rounded-xl w-32 h-20 flex items-center justify-center shrink-0 overflow-hidden">
                                <img src={car.image} alt={car.name} className={`max-h-full object-contain transition-transform ${car.flip ? "scale-x-[-1]" : ""}`} />
                            </div>
                            <div className="min-w-0">
                                <h3 className="text-lg font-bold truncate">{car.name}</h3>
                                <div className="flex items-center gap-1 text-xs mt-1">
                                    {[...Array(5)].map((_, i) => (<FaStar key={i} className="text-[#F59E0B]" />))}
                                    <span className="text-base-content/60 ml-1 shrink-0">{car.reviewsCount || 440}+ Reviewer</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-base-content/60 font-medium">Subtotal</span>
                                <span className="font-semibold text-base">${basePrice.toFixed(2)}</span>
                            </div>
                            {discount > 0 && (
                                <div className="flex justify-between text-success">
                                    <span className="font-medium">Discount ({discount * 100}%)</span>
                                    <span className="font-semibold text-base">-${discountAmount.toFixed(2)}</span>
                                </div>
                            )}
                            <div className="flex justify-between">
                                <span className="text-base-content/60 font-medium">Tax</span>
                                <span className="font-semibold text-base">$0.00</span>
                            </div>
                        </div>

                        <form onSubmit={handleApplyPromo} className="relative flex items-center bg-base-200/40 rounded-xl px-4 py-2">
                            <input
                                type="text"
                                placeholder="Apply promo code"
                                value={promoInput}
                                onChange={(e) => setPromoInput(e.target.value)}
                                className="bg-transparent border-none outline-none w-full text-sm placeholder:text-base-content/40"
                            />
                            <button type="submit" className="btn btn-sm btn-ghost font-semibold shrink-0 cursor-pointer">Apply now</button>
                        </form>

                        <div className="flex justify-between items-center pt-4">
                            <div>
                                <h4 className="font-bold text-base md:text-lg">Total Rental Price</h4>
                                <p className="text-xs text-base-content/60">Overall price and includes rental discount</p>
                            </div>
                            <span className="text-2xl md:text-3xl font-bold text-base-content">${totalRentalPrice.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="lg:col-span-2 lg:col-start-1 space-y-8 w-full">
                    <div className="bg-base-100 p-6 md:p-8 rounded-2xl shadow-sm space-y-6">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-lg md:text-xl font-bold">Billing Info</h2>
                                <p className="text-xs md:text-sm text-base-content/60">Please enter your billing info</p>
                            </div>
                            <span className="text-xs text-base-content/40 font-medium">Step 1 of 4</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { label: 'Name', name: 'name', placeholder: 'Your name' },
                                { label: 'Phone Number', name: 'phone', placeholder: 'Phone number' },
                                { label: 'Address', name: 'address', placeholder: 'Address' },
                                { label: 'Town & City', name: 'city', placeholder: 'Town or city' }
                            ].map((item) => (
                                <div key={item.name} className="space-y-2">
                                    <label className="text-sm font-semibold">{item.label}</label>
                                    <input
                                        type="text"
                                        name={item.name}
                                        placeholder={item.placeholder}
                                        value={formData[item.name]}
                                        onChange={handleChange}
                                        required
                                        className="input input-bordered w-full bg-base-200/40 rounded-xl"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-base-100 p-6 md:p-8 rounded-2xl shadow-sm space-y-6">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-lg md:text-xl font-bold">Rental Info</h2>
                                <p className="text-xs md:text-sm text-base-content/60">Please select your rental date</p>
                            </div>
                            <span className="text-xs text-base-content/40 font-medium">Step 2 of 4</span>
                        </div>

                        {['pickup', 'dropoff'].map((type) => {
                            const isPickup = type === 'pickup';
                            const state = isPickup ? pickup : dropoff;
                            const setState = isPickup ? setPickup : setDropoff;

                            return (
                                <div key={type} className="w-full space-y-4">
                                    {!isPickup && <div className="my-6"></div>}
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="booking-type"
                                            id={type}
                                            checked={bookingType === type}
                                            onChange={() => setBookingType(type)}
                                            className="radio radio-primary radio-sm"
                                        />
                                        <label htmlFor={type} className="text-base-content font-semibold text-base cursor-pointer">
                                            {isPickup ? 'Pick - Up' : 'Drop - Off'}
                                        </label>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                                        <div className="space-y-4">
                                            <div className="flex flex-col">
                                                <span className="text-base-content font-bold text-sm mb-1">Locations</span>
                                                <select
                                                    value={state.city}
                                                    onChange={(e) => setState({ ...state, city: e.target.value })}
                                                    className="select select-bordered w-full rounded-xl text-xs md:text-sm cursor-pointer"
                                                    required={bookingType === type}
                                                >
                                                    <option value="">Select your city</option>
                                                    {getLocations().map((c) => <option key={c}>{c}</option>)}
                                                </select>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-base-content font-bold text-sm mb-1">Time</span>
                                                <select
                                                    value={state.time}
                                                    onChange={(e) => setState({ ...state, time: e.target.value })}
                                                    className="select select-bordered w-full rounded-xl text-xs md:text-sm cursor-pointer"
                                                    required={bookingType === type}
                                                >
                                                    <option value="">Select your time</option>
                                                    {getTimes().map((t) => <option key={t}>{t}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-base-content font-bold text-sm mb-1">Date</span>
                                            <select
                                                value={state.date}
                                                onChange={(e) => setState({ ...state, date: e.target.value })}
                                                className="select select-bordered w-full rounded-xl text-xs md:text-sm cursor-pointer"
                                                required={bookingType === type}
                                            >
                                                <option value="">Select your date</option>
                                                {getDates().map((d) => <option key={d}>{d}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="bg-base-100 p-6 md:p-8 rounded-2xl shadow-sm space-y-6">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-lg md:text-xl font-bold">Payment Method</h2>
                                <p className="text-xs md:text-sm text-base-content/60">Please enter your payment method</p>
                            </div>
                            <span className="text-xs text-base-content/40 font-medium">Step 3 of 4</span>
                        </div>

                        <div className="p-5 bg-base-200/40 rounded-2xl space-y-6">
                            <label className="flex items-center justify-between cursor-pointer">
                                <span className="font-semibold flex items-center gap-3 text-sm">
                                    <input type="radio" name="paymentMethod" value="creditCard" defaultChecked onChange={handleChange} className="radio radio-primary" />
                                    Credit Card
                                </span>
                                <div className="flex items-center gap-1 font-bold text-lg italic tracking-tighter text-blue-600">
                                    <RiVisaLine className='text-5xl' />
                                    <div className="flex items-center -space-x-3">
                                        <div className="w-5 h-5 rounded-full bg-red-500 opacity-80"></div>
                                        <div className="w-5 h-5 rounded-full bg-amber-500 opacity-80"></div>
                                    </div>
                                </div>
                            </label>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { label: 'Card Number', name: 'cardNumber', placeholder: 'Card number', type: 'text' },
                                    { label: 'Expiration Date', name: 'expirationDate', placeholder: 'DD / MM / YY', type: 'text' },
                                    { label: 'Card Holder', name: 'cardHolder', placeholder: 'Card holder', type: 'text' },
                                    { label: 'CVC', name: 'cvc', placeholder: 'CVC', type: 'password' }
                                ].map((field) => (
                                    <div key={field.name} className="space-y-2">
                                        <label className="text-sm font-semibold">{field.label}</label>
                                        <input type={field.type} name={field.name} placeholder={field.placeholder} required={formData.paymentMethod === 'creditCard'} value={formData[field.name]} onChange={handleChange} className="input input-bordered w-full bg-base-100 rounded-xl" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {[
                            { value: 'paypal', label: 'PayPal', icon: <FaPaypal className="text-xl text-blue-600" /> },
                            { value: 'bitcoin', label: 'Bitcoin', icon: <FaBitcoin className="text-xl text-amber-500" /> }
                        ].map((pay) => (
                            <label key={pay.value} className="p-4 bg-base-200/40 rounded-2xl flex items-center justify-between cursor-pointer block">
                                <input type="radio" name="paymentMethod" value={pay.value} onChange={handleChange} className="radio radio-primary" />
                                <div className="flex items-center gap-2">
                                    {pay.icon}
                                    <span className="font-bold italic text-sm">{pay.label}</span>
                                </div>
                            </label>
                        ))}
                    </div>

                    <div className="bg-base-100 p-6 md:p-8 rounded-2xl shadow-sm space-y-6">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-lg md:text-xl font-bold">Confirmation</h2>
                                <p className="text-xs md:text-sm text-base-content/60">We are getting to the end. Just few clicks and your rental is ready!</p>
                            </div>
                            <span className="text-xs text-base-content/40 font-medium">Step 4 of 4</span>
                        </div>

                        <div className="space-y-4">
                            <label className="flex items-start md:items-center gap-3 cursor-pointer bg-base-200/40 p-4 rounded-xl">
                                <input
                                    type="checkbox"
                                    name="marketingConsent"
                                    checked={formData.marketingConsent}
                                    onChange={handleChange}
                                    required
                                    className="checkbox checkbox-primary mt-0.5 md:mt-0"
                                />
                                <span className="text-xs md:text-sm font-medium">I agree with sending an Marketing and newsletter emails. No spam, promised!</span>
                            </label>
                            <label className="flex items-start md:items-center gap-3 cursor-pointer bg-base-200/40 p-4 rounded-xl">
                                <input
                                    type="checkbox"
                                    name="termsConsent"
                                    checked={formData.termsConsent}
                                    onChange={handleChange}
                                    required
                                    className="checkbox checkbox-primary mt-0.5 md:mt-0"
                                />
                                <span className="text-xs md:text-sm font-medium">I agree with our terms and conditions and privacy policy.</span>
                            </label>
                        </div>

                        <button type="submit" className="btn btn-primary text-white text-base py-3 px-6 rounded-md cursor-pointer">
                            Rent Now
                        </button>

                        <div className="space-y-2 pt-2">
                            <div className="flex items-center gap-2 text-primary font-bold">
                                <MdOutlineSecurity className="text-2xl" />
                                <span className="text-sm">All your data are safe</span>
                            </div>
                            <p className="text-xs text-base-content/60">
                                We are using the most advanced security to provide you the best experience ever.
                            </p>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
}