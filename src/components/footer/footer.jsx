import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SlCallIn } from "react-icons/sl";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="mt-[100px]">
      <div className="container">
        <Accordion type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="text-white bg-[#181818] px-6"
          >
            <AccordionTrigger>FAQ</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quo aliquam id expedita repudiandae ex laudantium veniam
              voluptates, at voluptate rem, quam, adipisci nostrum quod magni
              autem incidunt minima est provident vero in maiores. Ducimus ut
              numquam amet nulla, labore hic, modi odio velit quasi eligendi
              officia quidem perferendis id minus incidunt odit accusantium
              libero neque vitae vel quisquam saepe enim! Delectus sunt qui
              eveniet amet magnam consectetur, maiores reiciendis consequuntur
              suscipit eaque, id ad pariatur quos iusto voluptate quidem
              expedita corporis excepturi aperiam enim, placeat dolore? Sequi
              accusantium cupiditate voluptates magnam, adipisci impedit eum
              ipsa at vero, ullam, porro velit quod labore esse iste deleniti!
              ti maiores. Illum voluptate debitis
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="text-white bg-[#181818] px-6"
          >
            <AccordionTrigger>What we will give for you?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quo aliquam id expedita repudiandae ex laudantium veniam
              voluptates, at voluptate rem, quam, adipisci nostrum quod magni
              autem incidunt minima est provident vero in maiores. Ducimus ut
              numquam amet nulla, labore hic, modi odio velit quasi eligendi
              officia quidem perferendis id minus incidunt odit accusantium
              libero neque vitae vel quisquam saepe enim! Delectus sunt qui
              eveniet amet magnam consectetur, maiores reiciendis consequuntur
              suscipit eaque, id ad pariatur quos iusto voluptate quidem
              expedita corporis excepturi aperiam enim, placeat dolore? Sequi
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="text-white bg-[#181818] px-6"
          >
            <AccordionTrigger>
              Is eyesBerg company best of the best?
            </AccordionTrigger>
            <AccordionContent>
              Yes. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam quo aliquam id expedita repudiandae ex laudantium veniam
              voluptates, at voluptate rem, quam, adipisci nostrum quod magni
              autem incidunt minima est provident vero in maiores. Ducimus ut
              numquam amet nulla, labore hic, modi odio velit quasi eligendi
              officia quidem perferendis id minus incidunt odit accusantium
              libero neque vitae vel quisquam saepe enim! Delectus sunt qui
              eveniet amet magnam consectetur, maiores reiciendis consequuntur
              suscipit eaque, id ad pariatur quos iusto voluptate quidem
              expedita corporis excepturi aperiam enim, placeat dolore? Sequi
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="py-2 flex items-center justify-between w-[100%] mt-[60px] border-b border-[#939697]">
          <div className="flex items-center gap-3">
            <p className="text-[30px] font-tank-bold text-white">
              АВТОРУСЬ TANK
            </p>
            <p className="text-[18px] font-light text-white border-l pl-2 border-l-gray-500">
              Официальный дилер
            </p>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-10">
              <a
                href="tel:+79999999999"
                className="text-[20px] font-tank-medium text-white"
              >
                +7 (999) 999-99-99
              </a>
              <p id="online" className="text-[#939697] text-[14px]">
                Мы на связи
              </p>
            </div>
            <Button className="px-[30px] flex gap-3 text-[14px] font-tank-medium">
              <SlCallIn />
              Заказать звонок
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between text-[#939697] py-3">
          <p>© 2024, АВТОРУСЬ ТАНК</p>
          <div className="flex gap-8">
            <p>Правовая информация</p>
            <p>Условия акции</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
