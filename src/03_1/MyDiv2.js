import MyDiv3 from "./MyDiv3";

export default function MyDiv2({d1, d2, d3}) {
  return (
    <div
      className="flex flex-col justify-center items-center
                 w-4/6 h-4/6 bg-lime-600
                 text-white
                 ">
      <p className="w-4/5 flex justify-start
                    font-bold text-2xl m-5
                    ">
        {`${d1} > ${d2}`}
        </p>
      <MyDiv3 d1={d1} d2={d2} d3={d3}/>
    </div>
  );
}
