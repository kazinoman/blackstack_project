import { Badge } from "antd";
import React from "react";

interface ITabInfo {
  id: string;
  coinName: string;
  price: string;
  increase: string;
}

interface ITabInfoProps {
  data: ITabInfo[];
}

const TabInfo: React.FC<ITabInfoProps> = ({ data }: ITabInfoProps) => {
  return (
    <div className="w-[100%] h-[23rem] overflow-y-auto">
      {data.map((data) => {
        return (
          <div
            key={data.id}
            className="p-2 flex flex-row items-center justify-between my-2 rounded-lg hover:bg-gray-200 hover:duration-700 delay-150">
            <h1 className="text-left w-20 font-semibold text-sm">{data.id}</h1>
            <h1 className="text-left w-20 text-gray-600">{data.coinName}</h1>
            <h1 className="text-left w-10">${data.price}</h1>
            <h1 className="text-left w-7">{data.increase}</h1>
            <Badge
              className="site-badge-count-109 font-bold w-16 p-2"
              count={`${parseInt(data.increase) > 0 ? "+" + data.increase : data.increase}`}
              style={{ backgroundColor: parseInt(data.increase) > 0 ? "rgba(33, 150, 83, 0.2)" : "#fad1d1", color: parseInt(data.increase) > -0 ? "green" : "#eb5757" }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TabInfo;
