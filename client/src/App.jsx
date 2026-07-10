import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout/MainLayout";

import Home from "./pages/Home/Home";
import Platform from "./pages/Platform/Platform";
import Solutions from "./pages/Solutions/Solutions";
import Industries from "./pages/Industries/Industries";
import Resources from "./pages/Resources/Resources";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/platform"
            element={<Platform />}
          />

          <Route
            path="/solutions"
            element={<Solutions />}
          />

          <Route
            path="/industries"
            element={<Industries />}
          />

          <Route
            path="/resources"
            element={<Resources />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;