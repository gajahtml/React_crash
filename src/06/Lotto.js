import { useState } from "react";
import TailBall from "../UI/TailBall";
import TailButton from "../UI/TailButton";

export default function Lotto() {
  const [ballTags, setBallTags] = useState();

  const handleLottoClick = () => {
    // 배열 초기화
    let nums = [];

    while (nums.length < 7) {
      let n = Math.floor(Math.random() * 45) + 1;
      if (!nums.includes(n)) {
        if (nums.length === 6) nums.sort((a, b) => a - b);
        nums.push(n);
      }
    }
    const ltt = nums.map((v) => <TailBall n={v} key={`ball${v}`} />);

    ltt.splice(6, 0, <span className="text-white text-6xl" key='plus'>+</span>);

    setBallTags(ltt);
    console.log(ltt);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex">{ballTags}</div>
      <div className="mt-10">
        <TailButton
          caption="로또번호생성"
          handleClick={handleLottoClick}
          color="red"
        />
      </div>
    </div>
  );
}
