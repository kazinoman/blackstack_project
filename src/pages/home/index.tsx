import { BalanceCardContainer } from "@components/index";
import React from "react";

const Home: React.FC<{}> = () => {
  return (
    <div className="px-2 md:px-3 xl:px-6 py-3">
      {/* Balance card */}
      <div>
        <BalanceCardContainer />
      </div>
    </div>
  );
};

export default Home;
