import { Outlet } from "react-router-dom";
import Nav from "../../components/navigation/Nav";

const Layout = () => {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
