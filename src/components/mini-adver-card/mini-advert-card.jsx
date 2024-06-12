import React from "react";

const MiniAdvertCard = ({ icons, title }) => {
  return (
    <div className="w-[306px] h-[68px] bg-[#181818] rounded-xl flex items-center gap-3  px-3 py-2">
      <div>{icons}</div>
      <p className="text-base font-tank-medium text-white">{title}</p>
    </div>
  );
};
1;
export default MiniAdvertCard;
