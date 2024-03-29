function MyClockTime() {
  const st = {
    backgroundColor: "rgb(5, 5, 55)",
    color: "white",
    width: "60%",
    height: "100px",
  };
  
  return (
    
    <footer style={st}>
      <h2>
        현재 시각 : <span></span>        
      </h2>
    </footer>
    
  );
}

export default MyClockTime;
