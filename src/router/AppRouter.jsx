import { Route, Routes } from "react-router-dom";
import { Main } from "../main/Main";
import { LandingsRoutes } from "../landings/router/LandingsRouter";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/enterprise/*" element={<LandingsRoutes />} />
      <Route path="/*" element={<Main />} />
    </Routes>
  );
};
