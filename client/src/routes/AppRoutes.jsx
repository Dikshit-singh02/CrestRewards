import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Platform from "../pages/Platform/Platform";
import Solutions from "../pages/Solutions/Solutions";
import Industries from "../pages/Industries/Industries";
import Resources from "../pages/Resources/Resources";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/platform" element={<Platform />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;