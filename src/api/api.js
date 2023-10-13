// Simulated transaction data
const transactions = [
    {customerId: 1, name: "Alice", amount: 120, date: "01/10/2023"},
    {customerId: 1, name: "Alice", amount: 80, date: "01/15/2023"},
    {customerId: 1, name: "Alice", amount: 55, date: "02/05/2023"},
    {customerId: 1, name: "Alice", amount: 150, date: "03/20/2023"},

    {customerId: 2, name: "Bob", amount: 200, date: "01/03/2023"},
    {customerId: 2, name: "Bob", amount: 90, date: "02/18/2023"},
    {customerId: 2, name: "Bob", amount: 60, date: "02/28/2023"},
    {customerId: 2, name: "Bob", amount: 110, date: "03/11/2023"},

    {customerId: 3, name: "Charlie", amount: 45, date: "01/07/2023"},
    {customerId: 3, name: "Charlie", amount: 125, date: "02/14/2023"},
    {customerId: 3, name: "Charlie", amount: 100, date: "03/05/2023"},
    {customerId: 3, name: "Charlie", amount: 95, date: "03/22/2023"},

    {customerId: 4, name: "David", amount: 70, date: "01/20/2023"},
    {customerId: 4, name: "David", amount: 140, date: "02/09/2023"},
    {customerId: 4, name: "David", amount: 105, date: "03/08/2023"},

    {customerId: 5, name: "Dmitry", amount: 710, date: "01/20/2023"},
    {customerId: 5, name: "Dmitry", amount: 10, date: "01/10/2023"},
    {customerId: 5, name: "Dmitry", amount: 7210, date: "01/02/2023"},
    {customerId: 5, name: "Dmitry", amount: 0, date: "02/09/2023"},
    {customerId: 5, name: "Dmitry", amount: 1410, date: "02/09/2023"},
    {customerId: 5, name: "Dmitry", amount: 5, date: "03/08/2023"},

    {customerId: 6, name: "Hanna", amount: 35, date: "01/07/2023"},
    {customerId: 6, name: "Hanna", amount: 25, date: "02/14/2023"},
    {customerId: 6, name: "Hanna", amount: 120, date: "03/05/2023"},
    {customerId: 6, name: "Hanna", amount: 95, date: "03/22/2023"},
];

// Simulated API call
export const fetchTransactions = (numberOfItems) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate an error condition 10% of the time
            const someErrorCondition = Math.random() < 0.1;

            if (someErrorCondition) {
                reject(new Error("Something went wrong!"));
                return;
            }
            const slicedTransactions = transactions.slice(0, numberOfItems);
            const hasMore = !!transactions[numberOfItems];
            resolve({ transactions: slicedTransactions, hasMore });
        }, 1000);
    });
};