import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Pie } from "@ant-design/plots";

const AssetSection = () => {
  const data = [
    {
      type: "BTC",
      value: 27,
    },
    {
      type: "ETH",
      value: 25,
    },
    {
      type: "ADA",
      value: 18,
    },
    {
      type: "Others",
      value: 15,
    },
  ];
  const config = {
    appendPadding: 10,
    height: 150,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    // legend: false,
    legend: {
      // layout: "horizontal",
      // position: "bottom",
    },
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 10,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: undefined,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: " ",
      },
    },
    // legend: {
    //   layout: "",
    //   position: 3,
    // },
  };
  return (
    <div className="p-4 rounded-2xl bg-white flex flex-col justify-start gap-6 h-full">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-lg font-bold">Assets</h1>
        <div className="border-[1px] border-[#e5e5e5] p-2 rounded-md">
          <Icon
            icon="solar:menu-dots-bold"
            className="w-5 h-5 text-[#e5e5e5]"
          />
        </div>
      </div>
      <div className="mt-5">
        <Pie {...config} />
      </div>
    </div>
  );
};

export default AssetSection;
