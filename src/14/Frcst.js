import TailInput from "../UI/TailInput";
import TailSelect from "../UI/TailSelect";
import TailButton from "../UI/TailButton";
import { useState, useEffect, useRef } from "react";
import getxy from "./getxy.json";
import { useNavigate } from "react-router-dom";

export default function Frcst() {
  const ops = getxy.map((item) => item["1단계"]);
  const navigator = useNavigate();

  const [x, setX] = useState();
  const [y, setY] = useState();
  const [dateInfo, setDateInfo] = useState();
  const [area, setArea] = useState();

  const dRef = useRef();
  const sRef = useRef();

  useEffect(() => {
    console.log(x, y);
  }, [x, y]);

  useEffect(() => {
    let url = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst";
    url = url + `?serviceKey=${process.env.REACT_APP_APIKEY}&pageNo=1&numOfRows=1000&dataType=json`;
    url = url + `&base_date=${dRef.current.value}&base_time=0630&nx=55&ny=127`;

    console.log(url);
  }, [dateInfo]);

  
  // 선택한 날짜정보
  const handleDate = () => {
    setDateInfo(dRef.current.value.replaceAll("-", ""));
  };
  
  // 선택한 지역정보
  const handleArea = () => {
    if(sRef.current.value === '' || sRef.current.value === undefined) return;
    
    let tmp = getxy.filter((item) => item["1단계"] === sRef.current.value);
    
    setArea(sRef.current.value);
    setX(tmp[0]["격자 X"]);
    setY(tmp[0]["격자 Y"]);
    
    console.log(sRef.current.value);
  };
  
  // 초단기예보
  const handleUltra = () => {
    if(dateInfo === '' || dateInfo === undefined) {
      alert('날짜를 선택하세요');
      dRef.current.focus();
      return;
    } 

    if(area === '' || area === undefined){
      alert('지역을 선택하세요');
      sRef.current.focus();
      return;
    }

    navigator(`/Ultra/${dateInfo}/${sRef.current.value}/${x}/${y}`);
  };

  return (
    <div className="w-11/12 justify-start grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
      <div>
        <TailInput
          type="date"
          inputRef={dRef}
          ph="날짜선택"
          handleChange={handleDate}
        />
      </div>
      <div>
        <TailSelect
          ops={ops}
          opDefault="------- 지역 선택 -------"
          selRef={sRef}
          handleSel={handleArea}
        />
      </div>
      <div>
        <TailButton caption="초단기예보" color="blue" handleClick={handleUltra} />
      </div>
      <div>
        <TailButton caption="단기예보" color="blue" handleClick={() => {}} />
      </div>
    </div>
  );
}
