import React, { useEffect, useRef, useState } from "react";
import GalleryCard from "./GalleryCard";

export default function GalleryMain2() {
  // 부산축제 전체 데이터
  const [tData, setTData] = useState();
  const [guName, setGuName] = useState();
  const [guTags, setGuTags] = useState();
  const [cardTags, setCardTags] = useState();

  // select 값
  const selRef = useRef();

  // select 선택
  const handleSelGu = () => {
    let tmp = tData
      .filter((item) => item.GUGUN_NM === selRef.current.value)
      .map((item) => (
        <GalleryCard
          imgUrl={item.MAIN_IMG_NORMAL}
          title={item.TITLE}
          pLocation={item.TRFC_INFO}
          kTag={item.USAGE_DAY_WEEK_AND_TIME}
        />
      ));
    setCardTags(tmp);

    console.log(selRef.current.value);
  };

  // 실제 fetch
  const getData = (url) => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setTData(data.getFestivalKr.item))
      .catch((err) => console.log(err));
  };

  // 부산축제 데이터 fetch
  useEffect(() => {
    let url = "https://apis.data.go.kr/6260000/FestivalService/getFestivalKr";
    url = url + `?serviceKey=${process.env.REACT_APP_APIKEY}`;
    url = url + "&pageNo=1&numOfRows=40&resultType=json";

    getData(url);
  }, []);

  // 구정보 만들기
  useEffect(() => {
    if (!tData) return;

    let tm = tData.map((item) => item.GUGUN_NM);
    tm = new Set(tm);
    tm = [...tm].sort();

    setGuName(tm);

    console.log("tm = ", tm);
  }, [tData]);

  useEffect(() => {
    if (!guName) return;

    let gn = guName.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ));

    setGuTags(gn);
  }, [guName]);

  return (
    <>
      <div className="w-full h-full flex flex-col justify-start items-center">
        <p className="my-4 text-4xl text-emerald-500 font-bold">부산축제정보</p>
        <form className="flex justify-start w-2/3 mx-auto">
          <label
            htmlFor="GuSelect"
            className="w-1/3 flex justify-start items-start text-2xl font-medium text-white"
          >
            Select an option
          </label>
          <select
            id="Gu"
            onChange={handleSelGu}
            ref={selRef}
            className="w-1/3 flex justify-start bg-slate-500 border-2 border-gray-200 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
          >
            <option defaultValue>Choose a Gu</option>
            {guTags}
          </select>
        </form>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardTags}
      </div>
    </>
  );
}
