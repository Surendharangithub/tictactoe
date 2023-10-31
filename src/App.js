import "./App.css";
import { useState } from "react";

function App() {
  const [matrix, setMatrix] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [char, setChar] = useState("X");
  const [winner, setWinner] = useState("");
  const [count,setCount] = useState(0)

  const clickHandler = (r, c) => {
    if (matrix[r][c]) return;
    let tempMatrix = [...matrix];
    tempMatrix[r][c] = char;
    setMatrix(tempMatrix);
    setChar(char === "X" ? "O" : "X");
    setCount(count+1)
    checkwinner();
  };

  const checkwinner = () => {
    if (
      matrix[0][0] &&
      matrix[0][0] === matrix[0][1] &&
      matrix[0][1] === matrix[0][2]
    ) {
      setWinner(matrix[0][0] + " is the Winner");
      setCount(0);
    }
    if (
      matrix[1][0] &&
      matrix[1][0] === matrix[1][1] &&
      matrix[1][1] === matrix[1][2]
    ) {
      setWinner(matrix[1][0] + " is the Winner");
      setCount(0);
    }
    if (
      matrix[2][0] &&
      matrix[2][0] === matrix[2][1] &&
      matrix[2][1] === matrix[2][2]
    ) {
      setWinner(matrix[2][0] + " is the Winner");
      setCount(0);
    }
    if (
      matrix[0][0] &&
      matrix[0][0] === matrix[1][0] &&
      matrix[1][0] === matrix[2][0]
    ) {
      setWinner(matrix[0][0] + " is the Winner");
      setCount(0);
    }
    if (
      matrix[0][1] &&
      matrix[0][1] === matrix[1][1] &&
      matrix[1][1] === matrix[2][1]
    ) {
      setWinner(matrix[0][1] + " is the Winner");
      setCount(0);
    }
    if (
      matrix[0][2] &&
      matrix[0][2] === matrix[1][2] &&
      matrix[1][2] === matrix[2][2]
    ) {
      setWinner(matrix[0][2] + " is the Winner");
      setCount(0);
    }
    if (
      matrix[0][0] &&
      matrix[0][0] === matrix[1][1] &&
      matrix[1][1] === matrix[2][2]
    ) {
      setWinner(matrix[0][0] + " is the Winner");
      setCount(0);
    }
    if (
      matrix[0][2] &&
      matrix[0][2] === matrix[1][1] &&
      matrix[1][1] === matrix[2][0]
    ) {
      setWinner(matrix[0][2] + " is the Winner");
      setCount(0);
    }
    if(count == 8){
      setWinner("The match has been drawn!")
      setCount(0);  
    }
  };

  //Giving background color for the clicked items
  const bgClass = (value) => {
    if (value === "X") return "xback";
    if (value === "O") return "oback";
    return "";
  };

  const resetHandler = () => {
    setMatrix([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setChar("X");
    setWinner("");
    setCount(0);
  };

  return (
    <div className="app">
      <div class="container">
        <h1>Tic Tac Toe Game</h1>
        {!winner && (
          <h3>
            It's <span>{char}'s</span> Turn
          </h3>
        )}
        <h2>{winner}</h2>
        
        <div>
          {winner ||
            matrix.map((row, rowIndex) => (
              <div className="row">
                {row.map((column, columnIndex) => (
                  <div
                    className={`cell ${bgClass(matrix[rowIndex][columnIndex])}`}
                    onClick={() => clickHandler(rowIndex, columnIndex)}
                  >
                    {matrix[rowIndex][columnIndex]}
                  </div>
                ))}
              </div>
            ))}
        </div>
        <div class="btn">
          <button type="button" onClick={resetHandler}>
            Reset Game
          </button>
        </div>

        
      </div>
    </div>
  );
}

export default App;
