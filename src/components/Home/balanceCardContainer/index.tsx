import React from "react";
import { BalanceCard } from "@/components";

const BalanceCardContainer = () => {
  return (
    <div className="w-[100%] flex flex-row gap-4 overflow-x-auto">
      {balanceInfo?.map((data: any) => {
        return (
          <div key={data.id}>
            <BalanceCard
              cardName={data.cardName}
              cardStatus={data.cardStatus}
              status={data.status}
              totalAmount={data.totalAmount}
              totalProfit={data.totalProfit}
              todayProfit={data.todayProfit}
              icon={data.icon}
              iconColor={data.iconColor}
              data={data.data}
            />
          </div>
        );
      })}
    </div>
  );
};

export default BalanceCardContainer;

const balanceInfo = [
  {
    id: 1,
    cardStatus: "Estmated Balance",
    totalAmount: 122984,
    status: "Monthly Profit",
    totalProfit: 2560.78,
    todayProfit: 14.67,
    cardName: "",
    icon: "images/totalBalance.svg",
    iconColor: "rgba(47, 128, 237, 0.2)",
  },
  {
    id: 2,
    cardStatus: "BTCUSDT",
    totalAmount: 23784,
    cardName: "BitCoin",
    status: "PNL Daily",
    totalProfit: 16.78,
    todayProfit: 14.67,
    icon: "images/Bitcoin.svg",
    iconColor: "rgba(255, 156, 7, 0.2)",
    data: [264, 417, 438, 887, 309, 397, 550, 575, 563, 430],
  },
  {
    id: 3,
    cardStatus: "ETHUSDT",
    totalAmount: 23784,
    cardName: "Ethereum",
    status: "PNL Daily",
    totalProfit: 189.91,
    todayProfit: 14.67,
    icon: "images/Etheriam.svg",
    iconColor: "rgba(77, 33, 255, 0.2)",
    data: [264, 237, 678, 487, 509, 567, 230, 175, 563, 830],
  },
  {
    id: 4,
    cardStatus: "SOLUSDT",
    totalAmount: 23784,
    cardName: "Solana",
    status: "PNL Daily",
    totalProfit: 189.91,
    todayProfit: 14.67,
    icon: "images/solana.svg",
    iconColor: "#FFD2D2",
    data: [264, 237, 878, 487, 409, 467, 130, 375, 263, 130],
  },
];
