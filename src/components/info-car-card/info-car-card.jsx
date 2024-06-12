import GiftOrangeVariant from "@/assets/icons/gift-orange-variant";
import ZametkaOrangeVariant from "@/assets/icons/zametka-orange";
import React from "react";
import { Button } from "../ui/button";
import { MdNavigateNext } from "react-icons/md";

const InfoCarCard = ({ img, title }) => {
  return (
    <div className="w-[100%] h-[237px] border border-gray-500 rounded-xl p-5 flex items-start relative">
      <img className="w-[470px]" src={img} alt="car" />
      <div>
        <h2 className="text-[30px] font-tank-bold text-white">{title}</h2>
        <p className="text-[#939697] font-tank-light text-lg mb-[34px]">
          2.0 л. Бензин, Полный, Автоматическая
        </p>
        <p className="text-[24px] font-tank-bold text-white mb-[27px]">
          3 649 000 ₽
        </p>
        <div className="flex items-center gap-10 absolute bottom-6">
          <div className="text-white flex items-center gap-2">
            <ZametkaOrangeVariant />
            <p className="text-base font-tank-medium">
              Выгода по Trade-in до 450 000 ₽{" "}
            </p>
          </div>
          <div className="text-white flex items-center gap-2">
            <GiftOrangeVariant />
            <p className="text-base font-tank-medium">
              Керамическое покрытие в подарок!
            </p>
          </div>
        </div>
      </div>
      <div className="ml-[150px] flex flex-col gap-5">
        <Button variant="default" className="py-4 px-[60px]">
          Получить предложение <MdNavigateNext />
        </Button>
        <Button variant="outline" className="py-4 px-[60px]">
          Тест-драйв
          <MdNavigateNext />
        </Button>
      </div>
    </div>
  );
};

export default InfoCarCard;
