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
        const month = months[d.getMonth()]; // Oyni massivdan olamiz

        return `${day} ${month}`; // "16 iyul" formatida qaytaradi
    });
};


export const getTimes = () => {
    return ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"];
};