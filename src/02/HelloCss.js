import logo from "../logo.svg";
import "./helloCss.css";
import HelloWhite from "./HelloWhite";
import HelloYellow from "./HelloYellow";

export default function helloCss() {
  // const st = {
  //     display : "flex",
  //     flexDirection : "column",
  //     justifyContents : "center",
  //     alignItems : "center",
  //     width : "40%",
  //     height : "70vh",
  //     backgroundColor : "black",
  //     color : "white",
  //     padding : "30px"
  // }

  const apikey = process.env.REACT_APP_MV_API;
  console.log(apikey);

  return (
    <div className="helloMain">
      <img className="imgLogo" src={logo} alt="logo" />
      <HelloWhite />
      <HelloYellow />
    </div>
  );
}
