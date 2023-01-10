import React from 'react'
import useHourTotals from '../custom_hooks/useHourTotals'
import { data } from './data/data'


export default function ReportTable() {

    let hourTotals = useHourTotals(data)

    return (
        <div>
            {data[0] ? (
                <table class="table-auto bg-gray-500 w-full text-center">
                    <thead>
                        <tr>
                            <th>location</th>
                            <th>6 am </th>
                            <th>7 am</th>
                            <th>8 am</th>
                            <th>9 am</th>
                            <th>10 am</th>
                            <th>11 am</th>
                            <th>12 pm</th>
                            <th>1 pm</th>
                            <th>2 pm</th>
                            <th>3 pm</th>
                            <th>4 pm</th>
                            <th>5 pm</th>
                            <th>6 pm</th>
                            <th>7 pm</th>

                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(row => {
                            const total = row[Object.keys(row)[0]].reduce((acc, val) => acc + val, 0);
                            return (
                                <tr key={Object.keys(row)[0]}>
                                    <td>{Object.keys(row)[0]}</td>
                                    {row[Object.keys(row)[0]].map((cell, index) => (
                                        <td key={index}>{cell}</td>
                                    ))}
                                    <td>{total}</td>
                                </tr>
                            );
                        })}
                       

                    </tbody>
                     <tfoot>
                        <tr>
                            <td>Total</td>
                            {hourTotals.map((total) => <td>{total}</td>)}
                        </tr>
                        </tfoot>

                </table>
            ) : (
                <h1 className="flex flex-row items-center justify-center text-4xl font-bold mx-auto text-gray-800">No Cookie Stands Available</h1>
            )}
        </div>
    );
}