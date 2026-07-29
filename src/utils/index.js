export const getLocations = () => {
    return ["Tashkent", "Samarkand", "Bukhara", "Khiva", "Fergana"];
};

export const getDates = () => {
    const months = [
        "yan", "fev", "mart", "apr", "may", "iyun",
        "iyul", "avg", "sen", "okt", "noy", "dek"
    ];

    return Array.from({ length: 7 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() + i);

        const day = d.getDate();
        const month = months[d.getMonth()]; 

        return `${day} ${month}`;
    });
};

export const getTimes = () => {
    return ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"];
};
export const carsData = [
    {
        id: "koenigsegg-1",
        name: "Koenigsegg",
        type: "Sport",
        image: "/images/catalog-1.png", 
        images: [
            "/images/catalog-1.png",
            "/images/salon-1.png",
            "/images/salon-2.png"
        ],
        description: "Koenigsegg is a hypercar built for pure adrenaline, featuring groundbreaking aerodynamics and extreme acceleration on any track.",
        gasoline: "90L",
        transmission: "Manual",
        people: "2 People",
        price: 99.00,
        oldPrice: null,
        reviewsCount: 440,
        bannerTitle: "Sports car with the best design and acceleration",
        bannerDescription: "Safety and comfort while driving a futuristic and elegant sports car",
    },
    {
        id: "nissan-gtr-2",
        name: "Nissan GT-R",
        type: "Sport",
        image: "/images/catalog-2.png",
        images: [
            "/images/catalog-2.png",
            "/images/salon-1.png",
            "/images/salon-2.png"
        ],
        description: "NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the 'race track'.",
        gasoline: "80L",
        transmission: "Manual",
        people: "2 People",
        price: 80.00,
        oldPrice: 100.00,
        reviewsCount: 440,
        flip: true,
        bannerTitle: "The NISMO track edition designed for absolute speed",
        bannerDescription: "Unleash raw track-bred power with unprecedented aerodynamic control",
    },
    {
        id: "rolls-royce-3",
        name: "Rolls-Royce",
        type: "Sedan",
        image: "/images/catalog-3.png",
        images: [
            "/images/catalog-3.png",
            "/images/salon-1.png",
            "/images/salon-2.png"
        ],
        description: "Rolls-Royce motor cars provide an unmatched combination of exquisite luxury, supreme comfort, and effortless power.",
        gasoline: "70L",
        transmission: "Manual",
        people: "4 People",
        price: 96.00,
        oldPrice: null,
        reviewsCount: 380,
        flip: true,
        bannerTitle: "Exquisite luxury and supreme comfort on every road",
        bannerDescription: "Experience effortless power wrapped in handcrafted elegance",
    },
    {
        id: "nissan-gtr-4",
        name: "Nissan GT-R",
        type: "Sport",
        image: "/images/catalog-4.png",
        images: [
            "/images/catalog-4.png",
            "/images/salon-1.png",
            "/images/salon-2.png"
        ],
        description: "Experience legendary Japanese engineering with twin-turbo performance and precise all-wheel-drive control.",
        gasoline: "80L",
        transmission: "Manual",
        people: "2 People",
        price: 80.00,
        oldPrice: 100.00,
        reviewsCount: 440,
        flip: true,
        bannerTitle: "Legendary Japanese engineering meets modern thrill",
        bannerDescription: "Twin-turbo performance with precise all-wheel-drive control",
    },
];

export const recommendationCars = [
    {
        id: "all-new-rush",
        name: "All New Rush",
        type: "SUV",
        gasoline: "70L",
        transmission: "Manual",
        people: "6 People",
        price: 72.00,
        image: "/images/rec-1.png",
        images: [
            "/images/rec-1.png",
            "/images/salon-1.png",
            "/images/salon-2.png"
        ],
        description: "All New Rush is designed to accommodate your family with ultimate comfort and exceptional safety on every journey.",
        reviewsCount: 210,
        bannerTitle: "Spacious SUV designed for ultimate family comfort",
        bannerDescription: "Reliable safety and expansive room for every family journey",
    },
    {
        id: "cr-v-1", 
        name: "CR-V",
        type: "SUV",
        gasoline: "80L",
        transmission: "Manual",
        people: "6 People",
        price: 80.00,
        image: "/images/rec-2.png",
        images: [
            "/images/rec-2.png",
            "/images/salon-1.png",
            "/images/salon-2.png"
        ],
        description: "Honda CR-V offers advanced technology, spacious interior, and reliable performance for daily city drives and family trips.",
        reviewsCount: 310,
        flip: true,
        bannerTitle: "Advanced technology and versatile cabin space",
        bannerDescription: "Smooth performance tailored for daily commutes and road trips",
    },
    {
        id: "all-new-terios",
        name: "All New Terios",
        type: "SUV",
        gasoline: "90L",
        transmission: "Manual",
        people: "6 People",
        price: 74.00,
        image: "/images/rec-3.png",
        images: [
            "/images/rec-3.png",
            "/images/salon-1.png",
            "/images/salon-2.png"
        ],
        description: "A robust and stylish SUV built to handle tough roads with ease while keeping passengers extremely comfortable.",
        reviewsCount: 190,
        bannerTitle: "Robust styling built to handle challenging terrain",
        bannerDescription: "Tough performance paired with exceptional cabin coziness",
    },
    {
        id: "cr-v-2", 
        name: "CR-V",
        type: "SUV",
        gasoline: "80L",
        transmission: "Manual",
        people: "6 People",
        price: 80.00,
        image: "/images/rec-2.png",
        images: [
            "/images/rec-2.png",
            "/images/salon-1.png",
            "/images/salon-2.png"
        ],
        description: "The versatile CR-V edition brings upgraded suspension and extra cargo capacity for long road adventures.",
        reviewsCount: 310,
        flip: true,
        bannerTitle: "Upgraded suspension for long road adventures",
        bannerDescription: "Extra cargo capacity and supreme driving stability",
    },
    {
        id: "mg-zx-excite",
        name: "MG ZX Excite",
        type: "Hatchback",
        gasoline: "70L",
        transmission: "Manual",
        people: "4 People",
        price: 74.00,
        image: "/images/rec-5.png",
        images: [
            "/images/rec-5.png",
            "/images/salon-1.png",
            "/images/salon-2.png"
        ],
        description: "MG ZX Excite delivers modern styling, smart infotainment features, and agile handling for city explorers.",
        reviewsCount: 150,
        bannerTitle: "Smart infotainment and agile handling for the city",
        bannerDescription: "Modern hatchback styling built for effortless urban exploration",
    }, 
    {
        id: "new-ms-1", 
        name: "New MG ZS",
        type: "Coupe",
        gasoline: "80L",
        transmission: "Manual",
        people: "6 People",
        price: 80.00,
        image: "/images/rec-6.png",
        images: [
            "/images/rec-6.png",
            "/images/salon-1.png",
            "/images/salon-2.png"
        ],
        description: "New MG ZS coupe variant combines sporty dynamics with practical interior space and a stunning exterior design.",
        reviewsCount: 220,
        flip: true,
        bannerTitle: "Sporty coupe dynamics with striking exterior lines",
        bannerDescription: "Blending aggressive aesthetic styling with practical interior room",
    },
    {
        id: "new-mg-zs-1", 
        name: "New MG ZS",
        type: "SUV",
        gasoline: "80L",
        transmission: "Manual",
        people: "6 People",
        price: 80.00,
        image: "/images/rec-6.png",
        images: [
            "/images/rec-6.png",
            "/images/salon-1.png",
            "/images/salon-2.png"
        ],
        description: "New MG ZS SUV offers great fuel efficiency, modern safety systems, and a remarkably spacious cabin.",
        reviewsCount: 240,
        flip: true,
        bannerTitle: "Exceptional fuel efficiency and modern safety systems",
        bannerDescription: "A remarkably spacious SUV configured for maximum peace of mind",
    },
    {
        id: "mg-zx-exclusive",
        name: "MG ZX Exclusive",
        type: "Hatchback",
        gasoline: "70L",
        transmission: "Manual",
        people: "4 People",
        price: 76.00,
        image: "/images/rec-5.png",
        images: [
            "/images/rec-5.png",
            "/images/salon-1.png",
            "/images/salon-2.png"
        ],
        description: "MG ZX Exclusive provides premium leather interior finishes and advanced driving assistance technologies.",
        reviewsCount: 180,
        bannerTitle: "Premium leather finishes and driver assistance tech",
        bannerDescription: "An exclusive hatchback experience crafted for maximum comfort",
    },
    {
        id: "new-mg-zs-2",
        name: "New MG ZS",
        type: "SUV",
        gasoline: "80L",
        transmission: "Manual",
        people: "8 People",
        price: 80.00,
        image: "/images/rec-6.png",
        images: [
            "/images/rec-6.png",
            "/images/salon-1.png",
            "/images/salon-2.png"
        ],
        description: "New MG ZS with extended seating capacity ensures everyone travels in utmost comfort, safety, and modern style.",
        reviewsCount: 290,
        flip: true,
        bannerTitle: "Extended seating capacity for large group travels",
        bannerDescription: "Ensuring everyone moves together in utmost comfort and safety",
    },
];