import { Link, useNavigate } from "react-router-dom";
import TailButton from "../UI/TailButton";

export default function RouteNav() {
    const navigator = useNavigate();
  return (
    <div
      className="w-11/12 flex flex-col
                    justify-center items-center
                    mt-3"
    >
      <ul className="w-11/12 flex
                    justify-center items-center text-white
                    my-5">
        <li className="px-4 py-2 m-2 rounded-md w-1/3 text-center bg-slate-500"><Link to='/'>Home</Link></li>
        <li className="px-4 py-2 m-2 rounded-md w-1/3 text-center bg-slate-500"><Link to='/Page1/오렌지'>Page1</Link></li>
        <li className="px-4 py-2 m-2 rounded-md w-1/3 text-center bg-slate-500"><Link to='/Page2?item1=커피&item2=쥬스'>Page2</Link></li>
      </ul>

      <div className="w-11/12 flex justify-center items-center">
        <TailButton caption="Home" color="blue" handleClick={() => {navigator("/")}} />
        <TailButton caption="Page1" color="blue" handleClick={() => {navigator("/Page1/포도")}} />
        <TailButton caption="Page2" color="blue" handleClick={() => {navigator("/Page2?item1=사과&item2=바나나")}} />
      </div>
    </div>
  );
}
