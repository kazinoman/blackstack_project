import React from "react";
import { Col, Row } from "antd";

import { AssetSection, BalanceCardContainer, ConvertComponent, History, MarketInfoContainer } from "@/components";

const Home: React.FC<{}> = () => {
  return (
    <div className="px-2 md:px-3 xl:px-6 py-3">
      {/* Balance card */}
      <div>
        <BalanceCardContainer />
      </div>

      {/* Middle section */}
      <Row
        gutter={10}
        className="mt-5">
        <Col
          span={16}
          xs={24}
          sm={24}
          md={24}
          lg={16}
          xl={14}>
          {/* Plot */}
          <div className="border-2">col 18</div>
        </Col>
        <Col
          span={8}
          xs={24}
          sm={24}
          md={24}
          lg={8}
          xl={10}>
          {/* Tabs */}
          <div className="rounded-lg p-3 bg-white">
            <MarketInfoContainer />
          </div>
        </Col>
      </Row>

      {/* Lower Section */}
      <Row
        gutter={[20, { xs: 8, sm: 16, md: 24, lg: 32 }]}
        className="mt-5">
        <Col
          xs={24}
          sm={6}
          md={6}
          lg={6}
          className="">
          <AssetSection />
        </Col>
        <Col
          xs={24}
          sm={6}
          md={6}
          lg={6}
          className="border-0">
          <ConvertComponent />
        </Col>
        <Col
          xs={24}
          sm={12}
          md={12}
          lg={12}
          className="border-0">
          <History />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
