import React from "react";

export interface IBalanceCardProps {
  cardStatus: string;
  status: string;
  totalAmount: number;
  totalProfit: number;
  todayProfit: number;
  icon?: string;
  iconColor: string;
  cardName: any;
  data?: number[] | undefined;
}

const BalanceCard: React.FC<IBalanceCardProps> = ({ cardStatus, cardName, totalAmount, totalProfit, todayProfit, status, icon, iconColor }: IBalanceCardProps) => {
  return (
    <div className="w-[40rem]  p-4 border-[1px] rounded-lg">
      <div className="flex flex-row">
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-3">
            <div
              className={`p-1 bg-[${iconColor}] border-2 w-10 flex flex-row items-center justify-center`}
              style={{ background: iconColor }}>
              <img src={icon} />
            </div>
            <div className="flex flex-col gap-0">
              <h1>{cardStatus}</h1>
              <h1 className="font-light text-xs">{cardName}</h1>
            </div>
          </div>
          <h1>{totalAmount}</h1>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default BalanceCard;
