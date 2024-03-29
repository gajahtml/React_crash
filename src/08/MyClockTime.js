import { useState, useEffect } from "react";

function MyClockTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // 컴포넌트 생성시 최초 1회 실행
  useEffect(() => {
    const t = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    console.log("[]=> ", currentTime);

    return () => {
      clearInterval(t);
    };
  }, []);

  // // [] 안의 tm 변수가 바뀔때 마다 실행
  // useEffect(() => {
  //   console.log("[tm]=> ", currentTime);
  // }, []);

  // // 랜더링이 일어날때마다 실행
  // useEffect(() => {
  //   console.log("[없는경우]=> ", currentTime);
  // });

  return (
    <footer
      className="flex justify-center items-center
                      w-full h-1/4 bg-slate-700 text-white"
    >
      <h1>
        {currentTime && `현재 시각 : ${currentTime.toLocaleTimeString()}`}
      </h1>
    </footer>
  );
}

export default MyClockTime;
