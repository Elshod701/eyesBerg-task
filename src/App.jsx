import React from "react";
import { Button } from "./components/ui/button";
import Header from "./components/header/header";
import { MdNavigateNext } from "react-icons/md";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <section
          id="hero"
          className="bg-[url('../src/assets/images/hero-bg.png')] bg-cover bg-no-repeat bg-center h-[700px]"
        >
          <div className="container">
            <div className="hero-content w-[450px] leading-[60px] pt-[180px]">
              <p className="text-[28px] font-tank-medium text-white">
                Улучшим любые условия
              </p>
              <p className="text-[60px] font-tank-bold text-white">TANK 500</p>
              <p className="text-[28px] font-tank-medium text-white">
                Осталось всего 5 автомобилей!
              </p>
              <Button className="px-[30px] py-[26px] flex items-center gap-1">
                <p className="text-[16px] font-tank-medium">
                  Получить предложение
                </p>
                <span className="text-2xl">
                  <MdNavigateNext />
                </span>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
