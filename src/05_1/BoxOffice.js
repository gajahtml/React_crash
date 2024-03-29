import BoxOfficeData from "./BoxOffice.json";
import { useEffect, useRef, useState } from "react";
// import BoxOfficeTbody from "./BoxOfficeTbody";
import BoxOfficeInfo from "./BoxOfficeInfo";
import TailInput from "../UI/TailInput";

export default function BoxOffice() {
  const [boxList, setBoxList] = useState();
  const [trs, setTrs] = useState();
  const boxRef = useRef();

  useEffect(() => {
    if(!boxList) return;

    let tm = boxList.map((item) => 
      <tr
        onClick={() => handleClick(item)}
        key={item.movieCd}
        className="text-red-300"
      >
        <td>{item.rank}</td>
        <td>{item.movieNm}</td>
        <td>{item.salesAcc}</td>
        <td>{item.audiAcc}</td>
        <td>{item.rankInten}</td>
      </tr>
    );
    setTrs(tm);

  }, [boxList]);

  // boxOffice 데이터 fetch
  const getData = (dt) => {
    let url =
      "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?";
    url = url + `key=${process.env.REACT_APP_MV_API}&targetDt=${dt}`;

    console.log(url);

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      .then((data) => setBoxList(data.boxOfficeResult.dailyBoxOfficeList))
      .catch((err) => console.log(err));
  };

  const handleSelDate = () => {
    getData(boxRef.current.value.replaceAll("-", ""));

    // console.log(boxRef.current.value.replaceAll("-", ""));
  };

  return (
    <div className="flex flex-col justify-center items-center w-4/5">
      <div className="w-4/5 h-14 flex justify-end items-center">
        <span className="text-white text-sm mx-5 font-bold">날짜 선택</span>
        <div className="flex">
          <TailInput
            type="date"
            inputRef={boxRef}
            handleChange={handleSelDate}
            ph="값입력"
            className=""
          />
        </div>
      </div>

      {/* <BoxOfficeInfo mov={mov} /> */}
    </div>
  );
}
