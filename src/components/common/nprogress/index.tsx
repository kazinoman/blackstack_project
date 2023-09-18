import { FC, useEffect } from "react";
import nProgress from "nprogress";

const NProgressComponent: FC = () => {
  useEffect(() => {
    nProgress.start();

    return () => {
      nProgress.done();
    };
  });

  return <></>;
};

export default NProgressComponent;
