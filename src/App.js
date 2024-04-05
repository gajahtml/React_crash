import "./App.css";
import { IoHome } from "react-icons/io5";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import MainHeader from "./01/MainHeader";
// import Hello from "./01/Hello";
// import Logo from "./01/Logo";
// import MyClock from "./01_1/MyClock";
// import HelloCss from "./02/HelloCss";
// import MyDiv1 from "./03_1/MyDiv1";
// import MyListMain from "./04/MyListMain";
// import BoxOffice from "./05_1/BoxOffice";
import Lotto from "./06/Lotto";
// import FoodCard from "./07/FoodCard";
import FoodMain from "./07/FoodMain";
import MyClock from "./08/MyClock";
// import Frcst from "./14/Frcst";
import Frcst2 from "./14/Frcst2";
import FrcstList from "./14/FrcstList";
// import Recoil from "./15/Recoil";
import RecoilMain from "./15/RecoilMain";
// import UltraSrtFcst from "./14/UltraSrtFcst";
// import VillageFcst from "./14/VillageFcst";
// import TrafficMain from "./09/TrafficMain";
// import RefVal from "./10/RefVal";
// import RefInput from "./10/RefInput";
// import BoxOffice from "./05_1/BoxOffice";
// import GalaryCard from "./11/GalaryCard";
// import GalleryMain from "./11/GalleryMain";
// import GalleryMain1 from "./11/GalleryMain1";
// import GalleryMain2 from "./11/GalleryMain2";
// import RouteMain from "./13/RouteMain";

function App() {
  // 함수형 컴포넌트, 반드시 return문 있어야 함

  return (
    <BrowserRouter>
      <div
        className="flex flex-col
                      w-full max-w-screen-xl
                      h-screen
                      mx-auto
                      overscroll-y-auto
                      "
      >
        <header
          className="flex justify-between items-center
                           h-20 p-10
                           text-2xl font-bold text-slate-300
                           bg-gray-700
                           border-b-2 border-yellow-100
                           "
        >
          <div>리액트실습</div>
          <div>
            <Link to="/">
              <IoHome className="text-4xl text-blue-400" />
            </Link>
          </div>
        </header>
        <nav
          className="flex justify-start items-center
                           h-10
                           text-xl font-bold text-slate-300
                           bg-gray-800
                           "
        >
          <Link to="/Lotto" className="mx-10">
            Lotto
          </Link>
          <Link to="/Food" className="mr-10">
            Food
          </Link>
          <Link to="/Frcst2" className="mr-10">
            Weather
          </Link>
          <Link to="/Recoil" className="mr-10">
            Recoil
          </Link>
        </nav>
        <main className="grow flex flex-col
                         justify-center items-center
                         bg-gray-800
                         ">
          <Routes>
            <Route path="/" element={<MyClock />} />
            <Route path="/Lotto" element={<Lotto />} />
            <Route path="/Food" element={<FoodMain />} />
            <Route path="/Frcst2" element={<Frcst2 />} />
            <Route path="/FrcstList" element={<FrcstList />} />
            <Route path="/Recoil" element={<RecoilMain />} />
          </Routes>
        </main>
        <footer
          className="flex justify-center items-center
                           bg-black
                           text-base font-bold text-white
                           h-20
                           "
        >
          ⓒ 2024 Jang Minwoo. All rights reserved.
        </footer>
      </div>
    </BrowserRouter>
  );
}

// 화살표 함수로 작성가능, 반드시 return문 있어야 함
// const App = () -> {
//  return ();
// }

export default App; // 모듈형 함수, index.js 에서 import 하기 위해 export default 해야됨
