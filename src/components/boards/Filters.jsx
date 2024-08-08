import { useState } from "react";

function Filters() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <ul className="flex border w-fit rounded-2xl">
      {["Boards", "List", "Other", "Other", "Other", "Other"].map(
        (label, index) => (
          <li
            key={index}
            className={`p-2 px-2.5 lg:px-5 cursor-pointer ${
              activeIndex === index ? "text-[#145389] font-semibold" : ""
            } ${index !== 5 ? "border-r" : ""}`}
            onClick={() => handleClick(index)}
          >
            {label}
          </li>
        )
      )}
    </ul>
  );
}

export default Filters;
