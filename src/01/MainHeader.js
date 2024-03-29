import logo from "../logo.svg";

function MainHeader() {
  return (  // JSX문법 -> 확장자바스크립트(카멜표기법)
    <header className="App-header">
      <p>K-Digital 6th Jang Minwoo</p>
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
}

export default MainHeader;
