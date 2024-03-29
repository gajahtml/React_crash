import "./hello.css";

function Hello() {
  let n = Math.floor(Math.random() * 100) + 1;

  const st1 = {
    backgroundColor: "darkblue",
    color: "white",
  };

  //   let s = '';
  //   if(n % 2 == 0) s = "짝수";
  //   else s = "홀수";

  // let x;

  const currentTime = new Date();

  return (
    <h1>
      <span style={st1}>Hello!</span>
      <span
        style={{
          display: "inline-flex",
          margin: "10px",
          backgroundColor: "yellow",
        }}
      >
        {/* {n < 10 && "0"}
        {n} */}
        {n < 10 ? `0${n}` : n}
      </span>

      {/* 조건부 렌더링 */}
      {n % 2 === 0 ? (
        <span style={{ color: "blue" }}>짝수</span>
      ) : (
        <span style={{ color: "green" }}>홀수</span>
      )}
      {n % 2 === 0 && "🍔"}
      {n % 2 === 1 && "🍕"}
      {/* {x || "x는 undefined입니다."} */}
      <p>
        {currentTime.toLocaleTimeString()}
      </p>
    </h1>
  );
}

export default Hello;
