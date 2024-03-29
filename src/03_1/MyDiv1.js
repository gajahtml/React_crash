import MyDiv2 from "./MyDiv2";

export default function MyDiv1() {
  const dname1 = "div1";
  const dname2 = "div2";
  const dname3 = "div3";

  return (
    <div
      className="flex flex-col justify-center items-center
                 w-4/5 h-3/5 bg-lime-800
                 text-white
                 ">
      <p className="w-4/5 flex justify-start
                    font-bold text-2xl m-5">
        {dname1}
        </p>
        <MyDiv2 d1={dname1} d2={dname2} d3={dname3} />
    </div>
  );
}
