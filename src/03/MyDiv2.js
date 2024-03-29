import MyDiv3 from "./MyDiv3";

export default function MyDiv2(probs) {
    console.log(probs)
  return (
    <div
      className="flex flex-col justify-center items-center
                 w-4/6 h-4/6 bg-lime-600
                 text-white
                 ">
      <p className="w-4/5 flex justify-start
                    font-bold text-2xl m-5
                    ">
        {`${probs.d1} > ${probs.d2}`}
        </p>
      <MyDiv3 d1={probs.d1} d2={probs.d2} d3={probs.d3}/>
    </div>
  );
}
