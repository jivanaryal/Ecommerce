import { useState } from "react";

const data = [
  {
    logos: "logo1",
    name: "name1",
    subval: [
      {
        name: "1",
      },
      {
        name: "2",
      },
      {
        name: "3",
      },
      {
        name: "4",
      },
    ],
  },
  {
    logos: "logo2",
    name: "name2",
    subval: [
      {
        name: "5",
      },
      {
        name: "6",
      },
      {
        name: "7",
      },
      {
        name: "8",
      },
    ],
  },
];

const H1_allitem = () => {
  const [hoveredData, setHoveredData] = useState(null);

  const handleMouseEnter = (val) => {
    setHoveredData(val);
  };

  const handleMouseLeave = () => {
    setHoveredData(null);
  };

  return (
    <div>
      <div>
        <div className="">
          {data.map((val, i) => (
            <div className="flex gap-1" key={i}>
              <div>{val.logos}</div>
              <div
                onMouseEnter={() => handleMouseEnter(val)}
                onMouseLeave={handleMouseLeave}
              >
                {val.name}
              </div>
            </div>
          ))}
        </div>
        <div className="right">
          {hoveredData && (
            <div>
              {hoveredData.subval && (
                <ul>
                  {hoveredData.subval.map((sub, i) => (
                    <li key={i}>{sub.name}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default H1_allitem;
