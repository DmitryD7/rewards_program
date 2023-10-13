import React from "react";
import {RewardsTableRow} from "./RewardTableRow/RewardTableRow";
import s from "./RewardsTable.module.css"

export const RewardsTable = ({rewardsData, loadMoreData, hasMoreItems, isLoading}) => {
    const loadMoreItems = () => {
        loadMoreData();
    };

    return (
        <div className={s.main}>
            <table className={s.table}>
                <thead>
                <tr>
                    <th>Customer Name</th>
                    <th>Monthly Points</th>
                    <th>Total Points</th>
                </tr>
                </thead>
                <tbody>
                {rewardsData?.map((item) => <RewardsTableRow key={`${item.name}-${item.totalPoints}`} item={item}/>)}
                </tbody>
            </table>

            {hasMoreItems && rewardsData.length > 0 &&
                <button className={`${s.loadButton} ${isLoading && s.loadButton_disabled}`} onClick={loadMoreItems} disabled={isLoading}>Load 5 More</button>
            }
        </div>
    );
};