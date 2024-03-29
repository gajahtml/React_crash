import FoodCard from "./FoodCard";
import fData from "./fooddata.json";
import TailButton from "../UI/TailButton";
import { useState } from "react";

export default function FoodMain() {
  let c1 = fData.map((item) => item["운영주체 분류"]);
  c1 = new Set(c1);
  c1 = [...c1];
  console.log(c1);

  const [fCards, setFCards] = useState();

  const handleList = (cItem) => {
    const tm = fData
      .filter((item) => item["운영주체 분류"] === cItem)
      .map((item) => <FoodCard fObj={item} key={item.사업장명} />);
    setFCards(tm);
  };

  const fBt = c1.map((i) => (
    <TailButton caption={i} color="blue" handleClick={() => handleList(i)} />
  ));

  //   let ctgrs = [];

  //   const fBt = ctgrs.map(i => <TailButton caption={i.fCtgr} color="blue"/>);

  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <div className="w-full flex justify-center items-center h-16 bg-slate-500">{fBt}</div>
      <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {fCards}
      </div>
    </div>
  );
}
