import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import HistorylistItem from "./listItem";

const History = () => {
  return (
    <div className="bg-white h-full p-4 rounded-2xl">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-lg font-bold">History</h1>
        <div className="border-[1px] border-[#e5e5e5] p-2 rounded-md w-16">
          <h1 className="w-5 h-5 text-gray-500 whitespace-nowrap text-center cursor-pointer">View All</h1>
        </div>
      </div>
      {data.map((data: any, id: number) => {
        return (
          <HistorylistItem
            id={id}
            amount={data.amount}
            name={data.name}
            status={data.status}
            time={data.time}
          />
        );
      })}
    </div>
  );
};

export default History;

const data = [
  { name: "Diposit", amount: "23738", time: "11:34 PM", status: "pending" },
  { name: "SANDUSDT", amount: "576", time: "06:34 PM", status: "done" },
  { name: "DOGEUSDT", amount: "23500", time: "02:34 PM", status: "done" },
  { name: "FTMUSDT", amount: "791", time: "06:45 PM", status: "done" },
];
