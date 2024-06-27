import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Template = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <div className="footer-container-bottom">
        <Footer />
      </div>
    </div>
  );
};

export default Template;
