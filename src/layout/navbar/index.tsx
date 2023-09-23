import React from "react";
import { Input, Badge, Drawer, Divider } from "antd";
import { Icon } from "@iconify/react";
import Sidebar from "../sidebar";
import { SideNavigationList } from "../sidebar";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC<{}> = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const location = useLocation();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
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
      <div className="flex flex-row items-center gap-2 sm:gap-5 ">
        <Badge dot={true}>
          <Icon
            icon="clarity:bell-line"
            className="h-7 w-7 text-[blue]"
          />
        </Badge>
        <img
          src="/images/81.svg"
          className="flex sm:hidden"
          onClick={showDrawer}
        />
        <div className=" flex-row items-center justify-center  p-4 rounded-xl bg-[#F2F8FF] gap-3 hidden sm:flex ">
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
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}>
        <div className=" p-5 md:p-1 min-h-[100vh]">
          {/* icon */}
          <div className="flex flex-row items-center justify-center pt-10 gap-3">
            <img
              src="/images/Logo.svg"
              className=""
            />
            <h1 className=" lg:flex font-bold text-lg">
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
                  className="w-[100%] flex flex-col">
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
                          <h2 className="lg:inline ">{data.name}</h2>
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
                          <h2 className="lg:inline ">{data.name}</h2>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
