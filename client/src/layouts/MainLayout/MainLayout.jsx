import { useEffect } from "react";
import {
  Outlet,
  useLocation,
} from "react-router-dom";

import NavigationBar from "../../components/layout/NavigationBar/NavigationBar";
import Footer from "../../components/layout/Footer/Footer";

import "./MainLayout.css";

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return (
    <div className="main-layout">
      <NavigationBar />

      <div className="main-layout__content">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;