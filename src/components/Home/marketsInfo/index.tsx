import React from "react";
import { Affix, Layout, Tabs } from "antd";
import type { TabsProps } from "antd";
import TabInfo from "./tabInfo";

const TabContainer = () => {
  const [tab, setTab] = React.useState<string>("1");
  const items: TabsProps["items"] = [
    {
      key: "0",
      label: "Markets",
      disabled: true,
    },
    {
      key: "1",
      label: "All",
      children: <TabInfo data={ForAllTab} />,
    },
    {
      key: "2",
      label: "Metaverse",
      children: <TabInfo data={MetaverseTab} />,
    },
    {
      key: "3",
      label: "Gaming",
      children: <TabInfo data={ForGamingTab} />,
    },
    {
      key: "4",
      label: "Defi",
      children: <TabInfo data={ForAllTab} />,
    },
    {
      key: "5",
      label: "NFT",
      children: <TabInfo data={ForNftTab} />,
    },
  ];

  return (
    <div className="flex flex-row items-start gap-4 rounded-md h-[25rem]">
      {/* <div className="h-10">
        <h1 className="font-medium text-lg mt-2">Markets</h1>
      </div> */}
      <Tabs
        activeKey={tab}
        defaultActiveKey="1"
        items={items}
        onChange={() => {}}
        className="overflow-x-auto w-full overflow-y-auto"
        renderTabBar={(props, TabBar) => {
          return (
            <div className="flex flex-row items-center gap-3 w-full">
              {items.map((data: any) => (
                <div
                  className={`p-2 rounded-md text-center align-middle cursor-pointer font-medium text-sm  ${data.key == props.activeKey ? "text-[blue] bg-[#f2f8ff]" : data.key === "0" ? "bg-white" : "bg-[#f8f8f9]"} ${data.key === "0" ? "bg-[#fff] text-xl font-semibold cursor-default" : ""}`}
                  onClick={() => {
                    if (data.key !== "0") setTab(data.key);
                  }}>
                  {data.label}
                </div>
              ))}
            </div>
          );
        }}
      />
    </div>
  );
};

export default TabContainer;

const ForAllTab = [
  {
    id: "BTCUSDT",
    coinName: "Bitcoin",
    price: "48392.75",
    increase: "1.52",
  },
  {
    id: "ETHUSDT",
    coinName: "Ethereum",
    price: "3359.28",
    increase: "2.17",
  },
  {
    id: "AXSUSDT",
    coinName: "Axie Infinity",
    price: "70.45",
    increase: "0.92",
  },
  {
    id: "BNBUSDT",
    coinName: "Binance Coin",
    price: "432.97",
    increase: "-0.78",
  },
  {
    id: "SOLUSDT",
    coinName: "Solana",
    price: "148.33",
    increase: "3.22",
  },
  {
    id: "ADAUSDT",
    coinName: "Cardano",
    price: "2.81",
    increase: "1.19",
  },
  {
    id: "XRPUSDT",
    coinName: "Ripple",
    price: "1.10",
    increase: "0.63",
  },
  {
    id: "DOTUSDT",
    coinName: "Polkadot",
    price: "29.94",
    increase: "-1.87",
  },
  {
    id: "LTCUSDT",
    coinName: "Litecoin",
    price: "180.09",
    increase: "1.03",
  },
  {
    id: "BNBUSDT",
    coinName: "Binance Coin",
    price: "432.97",
    increase: "-0.78",
  },
  {
    id: "XMRUSDT",
    coinName: "Monero",
    price: "245.84",
    increase: "0.95",
  },
  {
    id: "DOGEUSDT",
    coinName: "Dogecoin",
    price: "0.3148",
    increase: "-1.11",
  },
  {
    id: "LINKUSDT",
    coinName: "Chainlink",
    price: "28.91",
    increase: "2.59",
  },
  {
    id: "MATICUSDT",
    coinName: "Polygon",
    price: "1.39",
    increase: "-1.72",
  },
  {
    id: "ICPUSDT",
    coinName: "Internet Computer",
    price: "44.27",
    increase: "0.84",
  },
  {
    id: "AVAXUSDT",
    coinName: "Avalanche",
    price: "67.54",
    increase: "-2.08",
  },
  {
    id: "XTZUSDT",
    coinName: "Tezos",
    price: "4.78",
    increase: "1.92",
  },
  {
    id: "ATOMUSDT",
    coinName: "Cosmos",
    price: "22.15",
    increase: "-1.53",
  },
  {
    id: "XEMUSDT",
    coinName: "NEM",
    price: "0.1652",
    increase: "1.27",
  },
  {
    id: "VETUSDT",
    coinName: "VeChain",
    price: "0.0926",
    increase: "1.11",
  },
];

const MetaverseTab = [
  {
    id: "BTCUSDT",
    coinName: "Bitcoin",
    price: "48392.75",
    increase: "1.52",
  },
  {
    id: "ETHUSDT",
    coinName: "Ethereum",
    price: "3359.28",
    increase: "-2.17",
  },
  {
    id: "AXSUSDT",
    coinName: "Axie Infinity",
    price: "70.45",
    increase: "0.92",
  },
  {
    id: "BNBUSDT",
    coinName: "Binance Coin",
    price: "432.97",
    increase: "-0.78",
  },
  {
    id: "SOLUSDT",
    coinName: "Solana",
    price: "148.33",
    increase: "3.22",
  },
  {
    id: "ADAUSDT",
    coinName: "Cardano",
    price: "2.81",
    increase: "-1.19",
  },
  {
    id: "XRPUSDT",
    coinName: "Ripple",
    price: "1.10",
    increase: "0.63",
  },
  {
    id: "DOTUSDT",
    coinName: "Polkadot",
    price: "29.94",
    increase: "-1.87",
  },
  {
    id: "LTCUSDT",
    coinName: "Litecoin",
    price: "180.09",
    increase: "1.03",
  },
  {
    id: "BNBUSDT",
    coinName: "Binance Coin",
    price: "432.97",
    increase: "-0.78",
  },
  {
    id: "XMRUSDT",
    coinName: "Monero",
    price: "245.84",
    increase: "0.95",
  },
  {
    id: "DOGEUSDT",
    coinName: "Dogecoin",
    price: "0.3148",
    increase: "-1.11",
  },
  {
    id: "LINKUSDT",
    coinName: "Chainlink",
    price: "28.91",
    increase: "2.59",
  },
  {
    id: "MATICUSDT",
    coinName: "Polygon",
    price: "1.39",
    increase: "-1.72",
  },
  {
    id: "ICPUSDT",
    coinName: "Internet Computer",
    price: "44.27",
    increase: "0.84",
  },
  {
    id: "AVAXUSDT",
    coinName: "Avalanche",
    price: "67.54",
    increase: "-2.08",
  },
  {
    id: "XTZUSDT",
    coinName: "Tezos",
    price: "4.78",
    increase: "0.92",
  },
  {
    id: "ATOMUSDT",
    coinName: "Cosmos",
    price: "22.15",
    increase: "-1.53",
  },
  {
    id: "XEMUSDT",
    coinName: "NEM",
    price: "0.1652",
    increase: "1.27",
  },
  {
    id: "VETUSDT",
    coinName: "VeChain",
    price: "0.0926",
    increase: "-1.11",
  },
  {
    id: "NEOUSDT",
    coinName: "NEO",
    price: "38.76",
    increase: "0.37",
  },
  {
    id: "ADAUSDT",
    coinName: "Cardano",
    price: "2.81",
    increase: "-1.19",
  },
];

const ForGamingTab = [
  {
    id: "ADAUSDT",
    coinName: "Cardano",
    price: "2.81",
    increase: "0.87",
  },
  {
    id: "XRPUSDT",
    coinName: "Ripple",
    price: "1.10",
    increase: "-0.42",
  },
  {
    id: "DOTUSDT",
    coinName: "Polkadot",
    price: "29.94",
    increase: "1.68",
  },
  {
    id: "LTCUSDT",
    coinName: "Litecoin",
    price: "180.09",
    increase: "-1.15",
  },
  {
    id: "XMRUSDT",
    coinName: "Monero",
    price: "245.84",
    increase: "2.34",
  },
  {
    id: "DOGEUSDT",
    coinName: "Dogecoin",
    price: "0.3148",
    increase: "-0.75",
  },
  {
    id: "LINKUSDT",
    coinName: "Chainlink",
    price: "28.91",
    increase: "0.96",
  },
  {
    id: "MATICUSDT",
    coinName: "Polygon",
    price: "1.39",
    increase: "-0.63",
  },
  {
    id: "ICPUSDT",
    coinName: "Internet Computer",
    price: "44.27",
    increase: "1.23",
  },
  {
    id: "AVAXUSDT",
    coinName: "Avalanche",
    price: "67.54",
    increase: "-0.91",
  },
];

const ForNftTab = [
  {
    id: "ATOMUSDT",
    coinName: "Cosmos",
    price: "22.15",
    increase: "0.72",
  },
  {
    id: "XEMUSDT",
    coinName: "NEM",
    price: "0.1652",
    increase: "-0.29",
  },
  {
    id: "VETUSDT",
    coinName: "VeChain",
    price: "0.0926",
    increase: "0.55",
  },
  {
    id: "BTCUSDT",
    coinName: "Bitcoin",
    price: "48392.75",
    increase: "-0.98",
  },
  {
    id: "ETHUSDT",
    coinName: "Ethereum",
    price: "3359.28",
    increase: "0.63",
  },
  {
    id: "AXSUSDT",
    coinName: "Axie Infinity",
    price: "70.45",
    increase: "-0.84",
  },
  {
    id: "BNBUSDT",
    coinName: "Binance Coin",
    price: "432.97",
    increase: "1.17",
  },
  {
    id: "SOLUSDT",
    coinName: "Solana",
    price: "148.33",
    increase: "-1.29",
  },
  {
    id: "ADAUSDT",
    coinName: "Cardano",
    price: "2.81",
    increase: "0.37",
  },
  {
    id: "XRPUSDT",
    coinName: "Ripple",
    price: "1.10",
    increase: "-0.52",
  },
];
