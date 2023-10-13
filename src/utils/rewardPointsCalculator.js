const calculatePoints = (amount) => {
    if (amount <= 50) return 0;
    if (amount <= 100) return amount - 50;
    return (amount - 100) * 2 + 50;
};

const calculatePointsForEachCustomer = (transactions) => {
    const pointsByCustomer = {};

    transactions.forEach(transaction => {
        const { customerId, name, amount, date } = transaction;
        const monthName = new Date(date).toLocaleString('default', { month: 'long' });
        const calculatedPoints = calculatePoints(amount);

        if (!pointsByCustomer[customerId]){
            pointsByCustomer[customerId] = {
                name,
                monthlyPoints: {},
                totalPoints: 0,
            }
        }

        if (!pointsByCustomer[customerId].monthlyPoints[monthName]) {
            pointsByCustomer[customerId].monthlyPoints[monthName] = 0;
        }

        pointsByCustomer[customerId].monthlyPoints[monthName] += calculatedPoints;
        pointsByCustomer[customerId].totalPoints += calculatedPoints;
    });

    return pointsByCustomer;
};

export {calculatePointsForEachCustomer};