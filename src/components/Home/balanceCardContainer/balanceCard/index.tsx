import { Badge } from "antd";
import React from "react";
import { TinyArea } from "@ant-design/plots";

export interface IBalanceCardProps {
  cardStatus: string;
  status: string;
  totalAmount: number;
  totalProfit: number;
  todayProfit: number;
  icon?: string;
  iconColor: string;
  cardName?: any;
  data?: number[];
}

const BalanceCard: React.FC<IBalanceCardProps> = ({ cardStatus, cardName, totalAmount, totalProfit, todayProfit, status, icon, iconColor, data }: IBalanceCardProps) => {
  const config = {
    height: 60,
    width: 220,
    autoFit: false,
    data: data ? data : [],
    smooth: true,
  };

  return (
    <div className="w-[23.5rem] p-4 rounded-lg bg-white">
      <div className="flex flex-row items-center justify-start">
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-3">
            <div
              className={`p-1 bg-[${iconColor}] rounded-md w-10 h-10 flex flex-row items-center justify-center`}
              style={{ background: iconColor }}>
              <img src={icon} />
            </div>
            <div className={`flex flex-col gap-0 ${cardName ? "items-start" : "mt-2 items-center"}`}>
              <h1 className="text-base font-medium">{cardStatus}</h1>
              <h1 className="font-light text-xs">{cardName}</h1>
            </div>
          </div>
          <h1 className={`font-bold  ${data ? "text-lg" : "text-xl"}`}>${totalAmount.toLocaleString()}</h1>
        </div>
        {data && <TinyArea {...config} />}
      </div>
      <div className="flex flex-row justify-between items-center mt-5">
        <h1>{status}</h1>
        <h1 className={`text-sm font-medium ${totalProfit < 20 ? "text-red-600" : "text-green-600"}`}>
          {totalProfit < 20 ? "-" : "+"}${totalProfit}
        </h1>
        <Badge
          className="site-badge-count-109 font-semibold"
          count={"+" + todayProfit}
          style={{ backgroundColor: "rgba(33, 150, 83, 0.2)", color: "green" }}
        />
      </div>
    </div>
  );
};

export default BalanceCard;
