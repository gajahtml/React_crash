import BoxOfficeData from "./BoxOffice.json";
import { useState } from "react";

export default function BoxOfficeTb() {
    console.log(BoxOfficeData);

  const [mov, setMov] = useState("영화를 선택하세요");

  const handleClick = (i) => {
    console.log(i);
    // 할당연산자로 state 변수 변경 불가 => 업데이트함수 변경
    // setMov = mov ;   <=== X
    setMov(i);
  };

  const movieItems = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList.map(
    (item) => (
      <tr
        key={item.movieCd}
        className="h-10 text-gray-500 bg-white hover:bg-slate-400 hover:font-bold
                       border-dotted border-b"
        onClick={() => {
          handleClick(item);
        }}
      >
        <td className="text-center">{item.rank}</td>
        <td>{item.movieNm}</td>
        <td className="text-right">
          {parseInt(item.salesAcc).toLocaleString()}
        </td>
        <td className="text-right">
          {parseInt(item.audiAcc).toLocaleString()}
        </td>
        <td className="w-2/12 text-right text-black">
          {parseInt(item.rankInten) === 0
            ? "➖"
            : parseInt(item.rankInten) > 0
            ? "🔺"
            : "🔻"}
          {parseInt(item.rankInten) !== 0 && Math.abs(item.rankInten)}
        </td>
      </tr>
    )
  );

  return (
    <table className="w-4/5 border">
      <thead>
        <tr
          className="h-10 text-center text-white
                       border-b-2"
        >
          <th className="w-1/12">순위</th>
          <th>영화명</th>
          <th>누적 매출액</th>
          <th>누적 관객수</th>
          <th>순위증감</th>
        </tr>
      </thead>
      <tbody>{movieItems}</tbody>
      <tfoot>
        {mov === "영화를 선택하세요" ? (
          <tr className="h-14 text-white font-bold"></tr>
        ) : (
          <tr className="h-14 text-white font-bold">
            <td className="text-center">{mov.rank}</td>
            <td className="text-red-500">{mov.movieNm}</td>
            <td className="text-right">
              {parseInt(mov.salesAcc).toLocaleString()}
            </td>
            <td className="text-right">
              {parseInt(mov.audiAcc).toLocaleString()}
            </td>
          </tr>
        )}
      </tfoot>
    </table>
  );
}
