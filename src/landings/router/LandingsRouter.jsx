import { Route, Routes } from "react-router-dom";
import { Landing } from "../Landing";
import landing1 from "../data/landing1.json";
import landing2 from "../data/landing2.json";

export const LandingsRoutes = () => {
  return (
    <Routes>
      <Route path="/landing1" element={<Landing data={landing1} />} />
      <Route path="/landing2" element={<Landing data={landing2} />} />
      <Route path="/landing3" element={<Landing />} />
      <Route path="/landing4" element={<Landing />} />
      <Route path="/landing5" element={<Landing />} />
      <Route path="/landing6" element={<Landing />} />
      <Route path="/landing7" element={<Landing />} />
      <Route path="/landing8" element={<Landing />} />
      <Route path="/landing9" element={<Landing />} />
      <Route path="/landing10" element={<Landing />} />
      <Route path="/landing11" element={<Landing />} />
      <Route path="/landing12" element={<Landing />} />
    </Routes>
  );
};
