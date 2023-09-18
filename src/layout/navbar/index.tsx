import React from "react";
import { Input, Badge } from "antd";
import { Icon } from "@iconify/react";

const Navbar: React.FC<{}> = () => {
  return (
    <div className="px-2 md:px-3 xl:px-6 py-3 flex items-center justify-between bg-white ">
      <div className="w-[90%] md:w-[50%] flex flexr-row items-center justify-center border-[1px] rounded-full px-4 py-2">
        <Input
          placeholder="Search..."
          className="border-[0px] rounded-md  focus:outline-none focus:border-transparent focus:ring-0"
        />

        <Icon
          icon={"ion:search-outline"}
          className="h-5 w-5 font-semibold text-[#C4CACD]"
        />
      </div>
      <div className="flex flex-row items-center gap-5">
        <Badge dot={true}>
          <Icon
            icon="clarity:bell-line"
            className="h-7 w-7 text-[blue]"
          />
        </Badge>
        <div className=" flex-row items-center justify-center  p-2 rounded-xl bg-[#F2F8FF] gap-3 hidden sm:flex ">
          <img src="/images/81.svg" />
          <div className="flex flex-col ">
            <h2 className="font-semibold text-sm">Andy Warhol</h2>
            <h2 className="font-light text-[#5E6E78]">andywarhol@gmail.com</h2>
          </div>
          <Icon
            icon={"charm:menu-kebab"}
            className="h-7 w-7 text-[#5E6E78] "
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
