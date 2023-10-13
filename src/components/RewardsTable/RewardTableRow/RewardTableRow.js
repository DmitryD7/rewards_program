import React from "react";

export const RewardsTableRow = ({item}) => {
    const {name, monthlyPoints, totalPoints} = item;

    return (
        <tr>
            <td>{name}</td>
            <td>{Object.entries(monthlyPoints).map(([month, points]) => (
                <div key={`${month}-${points}`}>
                    <strong>{month}</strong>: {points} points
                </div>
            ))}</td>
            <td>{totalPoints}</td>
        </tr>
    );
};