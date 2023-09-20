import { Badge } from "antd";
import React from "react";

interface IHistoryListProps {
  id: number;
  status: string;
  name: string;
  time: string;
  amount: number;
}

const HistorylistItem: React.FC<IHistoryListProps> = ({ status, name, time, amount }) => {
  return (
    <div className="flex flex-row items-center justify-between py-5 border-b-[1px] border-[#e4e4e4]">
      <h1 className="text-left w-20 font-semibold text-sm">{name}</h1>
      <h1 className={`text-left w-20 font-medium text-sm ${amount > 600 ? "text-green-500" : "text-red-500"}`}>
        {amount > 600 ? "+" : "-"}${amount}
      </h1>
      <h1 className="text-left w-25 text-sm">{time}</h1>
      {/* <h1 className="text-center w-30  text-sm ">{status}</h1> */}
      <div
        className="w-20 rounded-md text-sm flex flex-row items-center justify-center"
        style={{ backgroundColor: status === "pending" ? "#fad1d1" : "rgba(33, 150, 83, 0.2)", height: "2rem", textAlign: "center", color: status === "pending" ? "#eb5757" : "green" }}>
        <h1 className="text-center font-medium">{status}</h1>
      </div>
    </div>
  );
};

export default HistorylistItem;
