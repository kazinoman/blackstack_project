import { Icon } from "@iconify/react/dist/iconify.js";
import { Divider } from "antd";
import React from "react";

const Sidebar: React.FC<{}> = () => {
  return (
    <div className=" p-5 md:p-1">
      {/* icon */}
      <div className="flex flex-row items-center justify-center pt-10 gap-3">
        <img
          src="/images/Logo.svg"
          className=""
        />
        <h1 className="md:hidden lg:flex font-bold text-lg">
          <span className="text-[blue] font-light">Blue</span>
          <span className="font-bold">Trade.</span>
        </h1>
      </div>

      {/* Navigation */}
      <div className="flex flex-col items-center justify-center gap-4 mx-auto w-full mt-10">
        {SideNavigationList.map((data: any, i: number) => {
          return (
            <div
              key={i}
              className="w-[70%] md:w-[90%] lg:w-[90%] xl:w-[80%] 2xl:w-[75%] flex flex-col">
              {data.common.map((data: any, i: number) => {
                return (
                  <div
                    className="flex flex-row items-center justify-start gap-2 my-2 p-3 bg-[#D5E6FB] rounded-2xl text-[blue]"
                    key={i}>
                    <Icon
                      icon={data.icon}
                      className="w-7 h-7 lg:w-5 lg:h-5  ml-14 md:ml-0 lg:ml-0 xl:ml-6 2xl:ml-10"
                    />
                    <h2 className="hidden lg:inline ">{data.name}</h2>
                  </div>
                );
              })}
              <Divider />
              {data.auth.map((data: any, i: number) => {
                return (
                  <div
                    className="flex flex-row items-center justify-start gap-2 my-4 p-3 bg-[#D5E6FB] rounded-2xl text-[blue]"
                    key={i}>
                    <Icon
                      icon={data.icon}
                      className="w-7 h-7 lg:w-5 lg:h-5  ml-14 md:ml-0 lg:ml-0 xl:ml-6 2xl:ml-10"
                    />
                    <h2 className="hidden lg:inline ">{data.name}</h2>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;

const SideNavigationList = [
  {
    common: [
      { name: "Dashboard", icon: "material-symbols:dashboard-rounded", route: "/" },
      { name: "Markets", icon: "streamline:shopping-store-1-store-shop-shops-stores", route: "/market" },
      { name: "Transactions", icon: "mingcute:transfer-2-line", route: "/transection" },
      { name: "Profile", icon: "ph:user-bold", route: "/profile" },
      { name: "Setting", icon: "clarity:settings-solid", route: "/settings" },
    ],
    auth: [
      { name: "Help", icon: "material-symbols:help-outline", route: "/help" },
      { name: "Log Out", icon: "ic:outline-logout", route: "/logout" },
    ],
  },
];
