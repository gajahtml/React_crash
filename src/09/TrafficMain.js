import { useEffect, useState } from "react";
import TrafficNav from "./TrafficNav";

export default function TrafficMain() {
  const [tData, setTData] = useState(); // 전체 fetch 데이터(17개 배열)
  const [c1, setC1] = useState(); // 대분류(중복제거)
  const [selC1, setSelC1] = useState(); // 선택된 대분류
  const [c2, setC2] = useState(); // 중분류(중복제거)
  const [selC2, setSelC2] = useState(); // 선택된 중분류
  const [detail, setDetail] = useState();
  const [info, setInfo] = useState();

  const getDataFetch = (url) => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setTData(data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    let url = `https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9`;
    url = `${url}?page=1&perPage=20&`;
    url = `${url}serviceKey=${process.env.REACT_APP_APIKEY}`;

    // console.log(url);

    getDataFetch(url);
  }, []);

  useEffect(() => {
    if (!tData) return;
    let td = tData.map((item) => item["사고유형_대분류"]);
    td = new Set(td);
    td = [...td];

    setC1(td);
    console.log(tData);
  }, [tData]);

  useEffect(() => {
    if (!tData) return;
    let tm = tData
      .filter((item) => item["사고유형_대분류"] === selC1)
      .map((item) => item["사고유형_중분류"]);
    tm = new Set(tm);
    tm = [...tm];

    setC2(tm);
  }, [selC1]);

  useEffect(() => {
    if (!tData) return;
    let tmd = tData.filter(
      (item) =>
        item["사고유형_대분류"] === selC1 && item["사고유형_중분류"] === selC2
    );
    setDetail(tmd[0]);
  }, [selC2]);

  useEffect(() => {
    if (!tData) return;
    const keyArr =['사고건수', '사망자수', '중상자수', '경상자수', '부상신고자수'];
    let tm = keyArr.map( k => 
      <div className="bg-teal-900">
        <div className="text-red-500 text-2xl text-center font-bold bg-emerald-100 h-10 pt-1">{k}</div>
        <div className="text-xl text-center font-extrabold mt-1">{detail[k]}</div>
      </div>
      );

      setInfo(tm);
    
  }, [detail]);

  return (
      <div
        className="w-full h-full flex flex-col
      justify-start items-center
      mt-5
      "
      >
        {c1 && (
          <TrafficNav
            title="대분류"
            category={c1}
            sel={selC1}
            setSel={setSelC1}
          />
        )}

        {c2 && (
          <TrafficNav
            title="중분류"
            category={c2}
            sel={selC2}
            setSel={setSelC2}
          />
        )}
        <div className="w-10/12 grid grid-cols-2
                                sm:grid-cols-3
                                md:grid-cols-5 gap-2
                                text-white mt-5 h-20
                                ">
          {info}
        </div>
        
      </div>      
  );
}
