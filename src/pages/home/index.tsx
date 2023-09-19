import React from "react";
import { Col, Row } from "antd";

import { BalanceCardContainer, MarketInfoContainer } from "@/components";

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
    </div>
  );
};

export default Home;
