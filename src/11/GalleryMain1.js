import { useEffect, useRef, useState } from "react";
import TailInput from "../UI/TailInput";
import TailButton from "../UI/TailButton";
import GalleryCard from "./GalleryCard";

export default function GalleryMain1() {
  const [gData, setGData] = useState();
  const [tags, setTags] = useState();
  const keyword = useRef();
  
  const getData = (w) => {
    console.log(w);

    let url = "https://apis.data.go.kr/6260000/FestivalService/getFestivalKr";
    url = url + `?serviceKey=${process.env.REACT_APP_APIKEY}`;
    url = url + "&pageNo=1&numOfRows=10&resultType=json";

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setGData(data.response.body.items.item))
      .catch((err) => console.log(err));
  };

  const handleKeyword = () => {};

  const handleFetch = () => {
    if (keyword.current.value === "") {
      alert("키워드를 입력하세요");
      keyword.current.focus();
      return;
    }
    let w = encodeURI(keyword.current.value);
    getData(w);

    console.log(w);
  };

  useEffect(() => {
    if (!gData) return;
    let gd = gData.map((item) => 
      <GalleryCard key={item.galContentId}
                    imgUrl={item.galWebImageUrl.replace('hhtp:', 'https:')}
                    title={item.galTitle}
                    pLocation={item.galPhotographyLocation}
                    kTag={item.galSearchKeyword}
                    />
    );

    setTags(gd);

    console.log(gd);
  }, [gData]);

  const handleClear = () => {
    // setGData = '';
    // setTags = '';
  };

  return (
    <div
      className="w-11/12 flex flex-col
                    mt-5
                    h-full justify-start items-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-2">
          <TailInput
            type="text"
            inputRef={keyword}
            ph="키워드 입력"
            handleChange={handleKeyword}
          />
        </div>
        <div className="px-3">
          <TailButton caption="조회" color="blue" handleClick={handleFetch} />
        </div>
        <div className="px-3">
          <TailButton caption="취소" color="blue" handleClick={handleClear} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tags}
      </div>
    </div>
  );
}
