import { useEffect, useRef, useState } from "react";
import TailButton from "../UI/TailButton";

export default function RefVal() {

  let cnt = 0;                              // 컴퍼넌트 변수
  const [stCnt, setStCnt] = useState(0);    // state 변수
  const refCnt = useRef(0);                 // ref 변수

  const handleLocal = () => {
    cnt = cnt + 1;
    console.log('cnt = ', cnt);
  };

  const handleState = () => {
    setStCnt(stCnt + 1);
  };

  const handleRef = () => {
    refCnt.current = refCnt.current + 1;
    console.log('refCnt = ', refCnt.current);
  };

  useEffect(() => {
    console.log("stCnt = ", stCnt);
  },[stCnt]);

  return (
    <div className="w-10/12 grid grid-cols-3 gap-4
                    text-white text-center">
      <div>
        컴퍼넌트 변수(지역변수) : {cnt}
      </div>
      <div>
        State 변수 : {stCnt}
      </div>
      <div>
        Ref 변수 : {refCnt.current}
      </div>
      <div>
        <TailButton caption = "컴퍼넌트 변수"
                    color = "blue"
                    handleClick={handleLocal} />
      </div>
      <div>
        <TailButton caption = "State 변수"
                    color = "red"
                    handleClick={handleState} />
      </div>
      <div>
        <TailButton caption = "Ref 변수"
                    color = "orange"
                    handleClick={handleRef} />
      </div>      
    </div>
  )
}
