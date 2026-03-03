import React from "react";
import CARD_2 from "../../assets/images/card2.png";
import { LuTrendingUpDown } from "react-icons/lu";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black">Expense Tracker</h2>
        {children}
      </div>
      <div className="hidden md:block w-[40vw] h-screen bg-violet-50 overflow-hidden relative">
        {/* Top left purple square */}
        <div className="w-48 h-48 rounded-[40px] bg-purple-600 absolute -top-7 -left-5 z-0" />

        {/* Top right fuchsia border circle */}
        <div className="w-80 h-80 rounded-[60px] border-[28px] border-fuchsia-600 absolute bottom-80 -right-20 z-[5]" />

        {/* Bottom left violet square */}
        <div className="w-48 h-48 rounded-[40px] bg-violet-500 absolute -bottom-7 -left-5 z-0" />

        <div className="grid grid-cols-1 z-10 relative pt-8 px-8">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track Your Income & Expenses"
            value="430,000"
            color="bg-primary"
          />
        </div>
        {/* Dashboard chart image */}
        <img
          src={CARD_2}
          alt="Dashboard Preview"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[85%] z-10 shadow-2xl"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-purple-400/10 border border-gray-200/50 z-10">
      <div
        className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl `}
      >
        {icon}
      </div>
      <div>
        <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
        <span className="text-[20px]">${value}</span>
      </div>
    </div>
  );
};
