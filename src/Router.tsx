import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { History } from "./pages/History";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export { Router };
