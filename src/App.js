import React, {useEffect, useState} from "react";
import {fetchTransactions} from "./api/api";
import {calculatePointsForEachCustomer} from "./utils/rewardPointsCalculator";
import {RewardsTable} from "./components/RewardsTable/RewardsTable";
import s from "./App.module.css"

const App = () => {
    const [rewardsData, setRewardsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [loadedItems, setLoadedItems] = useState(5);
    const [hasMoreItems, setHasMoreItems] = useState(true);


    const fetchData = async (numberOfItems) => {
        try {
            setLoading(true)
            const {transactions, hasMore} = await fetchTransactions(numberOfItems);
            const rewards = calculatePointsForEachCustomer(transactions);
            setRewardsData(Object.values(rewards));
            setLoadedItems(n => n + numberOfItems);
            setHasMoreItems(hasMore)
        } catch (err) {
            setError(err.message || 'Some error occurred');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(loadedItems);
    }, []);

    if (error) return <div className={s.error}>Error: {error}</div>;

    return (
        <section className={s.app_main}>
            {loading && <div className={s.loading}>Loading...</div>}
            <h1>
                Rewards program
            </h1>
            <RewardsTable rewardsData={rewardsData} isLoading={loading} hasMoreItems={hasMoreItems} loadMoreData={() => fetchData(loadedItems + 5)}/>
        </section>
    )
}

export default App;