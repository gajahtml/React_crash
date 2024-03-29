import "./App.css";
import { IoHome } from "react-icons/io5";
// import MainHeader from "./01/MainHeader";
// import Hello from "./01/Hello";
// import Logo from "./01/Logo";
// import MyClock from "./01_1/MyClock";
// import HelloCss from "./02/HelloCss";
// import MyDiv1 from "./03_1/MyDiv1";
// import MyListMain from "./04/MyListMain";
// import BoxOfficeTb from "./05_1/BoxOfficeTb";
// import Lotto from "./06/Lotto";
// import FoodCard from "./07/FoodCard";
// import FoodMain from "./07/FoodMain";
// import MyClock from "./08/MyClock";
// import TrafficMain from "./09/TrafficMain";
// import RefVal from "./10/RefVal";
// import RefInput from "./10/RefInput";
// import BoxOffice from "./05_1/BoxOffice";
// import GalaryCard from "./11/GalaryCard";
// import GalleryMain from "./11/GalleryMain";
// import GalleryMain1 from "./11/GalleryMain1";
import GalleryMain2 from "./11/GalleryMain2";

function App() {
  // 함수형 컴포넌트, 반드시 return문 있어야 함
  return (
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
          <IoHome className="text-4xl text-blue-400" />
        </div>
      </header>
      <main
        className="grow flex flex-col
                       justify-center items-center
                       bg-gray-800
                       ">
        
        <GalleryMain2 />
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
  );
}

// 화살표 함수로 작성가능, 반드시 return문 있어야 함
// const App = () -> {
//  return ();
// }

export default App; // 모듈형 함수, index.js 에서 import 하기 위해 export default 해야됨
