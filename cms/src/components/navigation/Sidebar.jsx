import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { HiBuildingOffice2, HiUserGroup } from "react-icons/hi2";
import { AiOutlineDown } from "react-icons/ai";

import { useState } from "react";

const Navdata = [
  {
    title: "dashboard",
    path: "/",
    logo: <MdDashboard />,
    subData: null,
  },
  {
    title: "category",
    logo: <HiBuildingOffice2 />,
    subData: [
      {
        title: "add category",
        path: "/category/addcat",
        logo: <MdDashboard />,
      },
      {
        title: "view category",
        path: "/category/viewcat",
        logo: <MdDashboard />,
      },
    ],
  },
  {
    title: "product",
    logo: <HiUserGroup />,
    subData: [
      {
        title: "add product",
        path: "/product/addproduct",
        logo: <MdDashboard />,
      },
      {
        title: "view product",
        path: "/product/viewproduct",
        logo: <MdDashboard />,
      },
    ],
  },
];

const Sidebar = () => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpansion = (title) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

  return (
    <div className="pl-5 h-full">
      <div className="text-[#FDF7FF] flex justify-center font-extrabold py-1"></div>
      <div className="text-[#e2cefd] pb-4">MAIN MENU</div>
      <div className="flex flex-col h-full gap-2">
        {Navdata.map((val, i) => (
          <div key={i}>
            <Link to={val.path}>
              {" "}
              <div
                className={`flex justify-between md:px-3 pl-1 pr-0 md:py-2 py-1  items-center mr-4 text-base text-[#ece1fc]  text-center gap-2 capitalize ${
                  location.pathname === val.path &&
                  "text-gray-700 bg-[#F1F9FB] shadow-md shadow-gray-700 font-bold text-lg"
                }`}
              >
                <div className="flex items-center gap-2 ">
                  <div className="text-lg">{val.logo}</div>
                  <div className="text-base">{val.title}</div>
                </div>

                {val.subData && (
                  <div
                    onClick={() => {
                      toggleExpansion(val.title);
                    }}
                  >
                    <AiOutlineDown />
                  </div>
                )}
              </div>
            </Link>

            {expandedItems[val.title] && val.subData && (
              <div className="ml-4">
                {val.subData.map((subVal, j) => (
                  <Link to={subVal.path} key={j}>
                    <div
                      className={`flex items-center gap-2 p-1 text-white mx-5 rounded-md  capitalize  ${
                        location.pathname === subVal.path &&
                        "text-black bg-[#F1F9FB] shadow-md  font-bold "
                      }`}
                    >
                      <div className="text-base">{subVal.logo}</div>
                      <div className="text-sm">{subVal.title}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
