import { Route, Routes } from "react-router-dom";
import { Landing } from "../Landing";
import landing1 from "../data/landing1.json";
import landing2 from "../data/landing2.json";
import landing3 from "../data/landing3.json";
import landing4 from "../data/landing4.json";
import landing5 from "../data/landing5.json";
import landing6 from "../data/landing6.json";
import landing7 from "../data/landing7.json";
import landing8 from "../data/landing8.json";
import landing9 from "../data/landing9.json";
import landing10 from "../data/landing10.json";
import landing11 from "../data/landing11.json";
import landing12 from "../data/landing12.json";

export const LandingsRoutes = () => {
  return (
    <Routes>
      <Route path="/landing1" element={<Landing data={landing1} />} />
      <Route path="/landing2" element={<Landing data={landing2} />} />
      <Route path="/landing3" element={<Landing data={landing3} />} />
      <Route path="/landing4" element={<Landing data={landing4} />} />
      <Route path="/landing5" element={<Landing data={landing5} />} />
      <Route path="/landing6" element={<Landing data={landing6} />} />
      <Route path="/landing7" element={<Landing data={landing7} />} />
      <Route path="/landing8" element={<Landing data={landing8} />} />
      <Route path="/landing9" element={<Landing data={landing9} />} />
      <Route path="/landing10" element={<Landing data={landing10} />} />
      <Route path="/landing11" element={<Landing data={landing11} />} />
      <Route path="/landing12" element={<Landing data={landing12} />} />
    </Routes>
  );
};
