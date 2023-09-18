import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routeList } from "./route";
import NProgressComponent from "@components/common/nprogress";

const ConfigRoutes = () => {
  return (
    <Suspense fallback={<NProgressComponent />}>
      <Routes>
        {routeList.map(({ path, Component, index }) => (
          <Route
            path={path}
            element={<Component />}
            key={path}
            index={index}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default ConfigRoutes;
