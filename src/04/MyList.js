import { FaHeart } from "react-icons/fa6";
import { useState } from "react";

export default function MyList({ title, imgUrl, content }) {
  // 지역변수
  let likeNum = 0;

  // state 변수
  const [stCnt, setStCnt] = useState(0);

  const handleLike = (t) => {
    console.log('handleClick' + t);
    likeNum = likeNum + 1;
    setStCnt(stCnt + 1);
    console.log(likeNum);
  };

  return (
    <div
      className="flex flex-col
                      w-full h-full
                      border-solid border-2 border-sky-500
                      hover:bg-gray-400 rounded-lg
                      bg-slate-300"
    >
      <div className="flex w-full h-2/3">
        <div className="w-1/4 max-w-40 ">
          <img className="" src={imgUrl} alt="{title}" />
        </div>
        <div className="w-3/4 max-w-120 px-4 py-2">
          <h1 className="font-bold text-2xl">{title}</h1>
          <p>{content}</p>
        </div>
      </div>
      <div
        className="flex justify-end items-end
                      h-1/3 pr-4 pb-2"
      >
        <span className="text-2xl mr-2" onClick = {() => {handleLike(title)}}>
          <FaHeart className="text-red-600
                              hover:text-violet-600" />
        </span>
        <span className="font-bold">좋아요 {stCnt}</span>
      </div>
    </div>
  );
}
