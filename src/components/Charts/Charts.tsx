"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from 'faker';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const data = {
  labels,
  datasets: [
    {
      label: "Requests",
      data: labels.map(() => faker.datatype.number({ min: 10, max: 100 })),
      borderColor: "rgba(212, 20, 90, 1)",
      backgroundColor: "rgba(212, 20, 90, 1)",
    },
    {
      label: "Click",
      data: labels.map(() => faker.datatype.number({ min: 10, max: 100 })),
      borderColor: "#FFF",
      backgroundColor: "#fff",
    },
  ],
};

export function Charts() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
    scales: {
      x: {
        display: true, // Hide x-axis labels
      },
      y: {
        display: true, // Hide y-axis labels
      },
    },
  };  

  return (
    <div className="rounded">
      <div className="flex justify-between px-4 py-4">
        <h2 className="text-xl text-black font-bold">Revenue</h2>
        <div className="flex gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded bg-primary"></span>
            <p className="text-base text-gray">This year</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-base text-gray">Last year</p>
            <span className="w-2 h-2 rounded border-white-3"></span>
          </div>
        </div>
      </div>

      <hr className="mb-4 border-none bg-light-black-1 h-[1px]" />

      <div className="px-4" >
        <Line options={options} data={data}/>
      </div>
    </div>

    
  );
}
