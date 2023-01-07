export default function useHourTotals(data) {
    const hourTotals = data.reduce((acc, location) => {
        const sales = location[Object.keys(location)[0]];
        sales.forEach((sale, index) => {
            if (acc[index] === undefined) {
                acc[index] = 0;
            }
            acc[index] += sale;
        });
        return acc;
    }, []);
    return hourTotals
}