import React from "react";

const AdvertCard = ({ title, subtitle, icon }) => {
  return (
    <div className="p-5 w-[416px] h-[114px] flex items-center gap-4 bg-transparent rounded-[10px] border border-[#939697">
      <div>{icon}</div>
      <div className="flex flex-col items-start text-white">
        <h3 className="text-[18px] font-tank-bold uppercase">{title}</h3>
        <p className="text-[14px] font-tank-light">{subtitle}</p>
      </div>
    </div>
  );
};

export default AdvertCard;
