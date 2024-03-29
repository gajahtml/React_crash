import bank from "./img/bank.png";
import market from "./img/market.png";
import busan from "./img/busan.png";
import { useState } from "react";

export default function FoodCard({ fObj }) {
  const [isClick, SetIsClick] = useState(false);

  const handleisClick = () => {
    SetIsClick(!isClick);
  };

  const fImg =
    fObj["구분"] === "기초푸드뱅크" ? bank : fObj["구분"] === "기초푸드마켓" ? market : busan;

  return (
    <div
      className="flex 
                w-full h-40 border
                bg-slate-600 text-teal-100
                py-1
                "
      onClick={handleisClick}
    >
      <div className="w-1/4 max-w-32 p-2 py-4">
        <img className="size-full" src={fImg} alt={fObj["구분"]} />
      </div>
      <div className="flex flex-col justify-evenly w-3/4 px-2 py-1">
        <h1 className="text-3xl font-bold">{fObj["사업장명"]}</h1>
        <h2 className="font-bold">{fObj["운영주체명"]}</h2>
        <h4 className="text-xs text-gray-400">{fObj["사업장 소재지"]}</h4>
        <h4 className="h-7 bg-slate-700 text-white">
          {isClick && `Tel : ${fObj["연락처(대표번호)"]} / Fax : ${fObj["팩스번호"]}`}
        </h4>
      </div>
    </div>
  );
}
