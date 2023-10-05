import { Outlet } from "react-router-dom";

import Header from "../../components/navigation/Nav";

const Layout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
