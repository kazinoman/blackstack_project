import { ConfigRoutes } from "@/routes";
import React from "react";
import { Col, Row } from "antd";
import { NavBar, SideBar } from "@/layout";

const Layout: React.FC<{}> = () => {
  return (
    <div className="container borde">
      <Row>
        <Col
          // span={4}
          xs={0}
          sm={0}
          md={2}
          lg={4}>
          <div className="bg-slate-50 border-r-[1px] h-full">
            <SideBar />
          </div>
        </Col>
        <Col
          // span={16}
          xs={24}
          sm={24}
          md={22}
          lg={20}
          className="bg-[#F0F8FF] ">
          <NavBar />
          <ConfigRoutes />
        </Col>
      </Row>
    </div>
  );
};

export default Layout;
