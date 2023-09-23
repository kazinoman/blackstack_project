import { Icon } from "@iconify/react/dist/iconify.js";
import { Divider } from "antd";
import React from "react";
import { useLocation, Link } from "react-router-dom";

const Sidebar: React.FC<{}> = () => {
  const location = useLocation();

  return (
    <div className=" p-5 md:p-1 min-h-[100vh]">
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
                  <Link to={data.route}>
                    <div
                      className={`flex flex-row items-center justify-start gap-2 my-2 p-3 rounded-2xl  ${location.pathname === data.route ? "bg-[#D5E6FB] shadow-sm delay-200 duration-500 text-[blue]" : ""}`}
                      key={i}>
                      <Icon
                        icon={data.icon}
                        className="w-7 h-7 lg:w-5 lg:h-5  ml-14 md:ml-0 lg:ml-0 xl:ml-6 2xl:ml-10"
                      />
                      <h2 className="hidden lg:inline ">{data.name}</h2>
                    </div>
                  </Link>
                );
              })}
              <Divider />
              {data.auth.map((data: any, i: number) => {
                return (
                  <Link to={data.route}>
                    <div
                      className={`flex flex-row items-center justify-start gap-2 my-2 p-3 rounded-2xl  ${location.pathname === data.route ? "bg-[#D5E6FB] shadow-sm delay-200 duration-500 text-[blue]" : ""}`}
                      key={i}>
                      <Icon
                        icon={data.icon}
                        className="w-7 h-7 lg:w-5 lg:h-5  ml-14 md:ml-0 lg:ml-0 xl:ml-6 2xl:ml-10"
                      />
                      <h2 className="hidden lg:inline ">{data.name}</h2>
                    </div>
                  </Link>
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

export const SideNavigationList = [
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
