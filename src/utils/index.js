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
        gasoline: "90L",
        transmission: "Manual",
        people: "2 People",
        price: 99.00,
        oldPrice: null, 
    },
    {
        id: "nissan-gtr-2",
        name: "Nissan GT-R",
        type: "Sport",
        image: "/images/catalog-2.png",
        gasoline: "80L",
        transmission: "Manual",
        people: "2 People",
        price: 80.00,
        oldPrice: 100.00,
        flip: true,
    },
    {
        id: "rolls-royce-3",
        name: "Rolls-Royce",
        type: "Sedan",
        image: "/images/catalog-3.png",
        gasoline: "70L",
        transmission: "Manual",
        people: "4 People",
        price: 96.00,
        oldPrice: null,
        flip: true,
    },
    {
        id: "nissan-gtr-4",
        name: "Nissan GT-R",
        type: "Sport",
        image: "/images/catalog-4.png",
        gasoline: "80L",
        transmission: "Manual",
        people: "2 People",
        price: 80.00,
        oldPrice: 100.00,
        flip: true,
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
        image: "/images/rec-1.png"
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
        flip: true,
    },
    {
        id: "all-new-terios",
        name: "All New Terios",
        type: "SUV",
        gasoline: "90L",
        transmission: "Manual",
        people: "6 People",
        price: 74.00,
        image: "/images/rec-3.png"
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
        flip: true,
    },
    {
        id: "mg-zx-excite",
        name: "MG ZX Excite",
        type: "Hatchback",
        gasoline: "70L",
        transmission: "Manual",
        people: "4 People",
        price: 74.00,
        image: "/images/rec-5.png"
    }, {
        id: "new-ms-1", 
        name: "New MG ZS",
        type: "Coupe",
        gasoline: "80L",
        transmission: "Manual",
        people: "6 People",
        price: 80.00,
        image: "/images/rec-6.png",
        flip: true
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
        flip: true
    },
    {
        id: "mg-zx-exclusive",
        name: "MG ZX Exclusive",
        type: "Hatchback",
        gasoline: "70L",
        transmission: "Manual",
        people: "4 People",
        price: 76.00,
        image: "/images/rec-5.png"
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
        flip: true
    },
    
];