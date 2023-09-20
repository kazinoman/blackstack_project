import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Input, Select, Space } from "antd";
import { Ripple, initTE } from "tw-elements";

const ConvertComponent = () => {
  initTE({ Ripple });
  return (
    <div className="bg-white h-full p-4 rounded-2xl">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-lg font-bold">Converts</h1>
        <div className="border-[1px] border-[#e5e5e5] p-2 rounded-md">
          <Icon
            icon="solar:menu-dots-bold"
            className="w-5 h-5 text-[#e5e5e5]"
          />
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-5">
        <div className="flex flex-row gap-3 bg-[#f9f9fa] p-2 rounded-md">
          <Input placeholder="100" />
          <Select
            className="k w-24 border-0"
            options={[{ value: "jack", label: "USDT" }]}
          />
        </div>
        <div className="flex flex-row gap-3 bg-[#f9f9fa] p-2 rounded-md">
          <Input placeholder="0.0043" />
          <Select
            className="k w-24"
            options={[{ value: "jack", label: "USDT" }]}
          />
        </div>
        <div className="flex flex-col gap-2">
          <button
            type="button"
            className="w-full bg-blue-500 p-3 rounded-md cursor-pointer ">
            <h1 className="text-center text-white font-semibold text-lg">Convert Now</h1>
          </button>
          <h1 className="text-xs text-[#626d7d]">The ultimate price and output is determined by the amount of tokens in the pool at the time of your swap.</h1>
        </div>
      </div>
    </div>
  );
};

export default ConvertComponent;
