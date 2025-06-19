import { useState } from "react";
const Games = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [randomNumber, setRandomNumber] = useState(Number);

  console.log(randomNumber, "random number");

  const winner = calculateWinner(square);
  const handleClick = (index: any) => {
    console.log(index);
    console.log(square[index]);
    if (square[index] || winner) return; // Prevent overwriting a square

    const number: any = Math.floor(Math.random() * 9);
    setRandomNumber(number);
    if (number === index) {
      const number: any = Math.floor(Math.random() * 9);
      setRandomNumber(number);
    }
    const nextSquare = square.slice();
    if (isXNext) {
      nextSquare[index] = "X"; // Set the square to "X" or "O"
    } else {
      nextSquare[randomNumber] = "O"; // Set the square to "X" or "O"
    }
    setSquare(nextSquare);
    setIsXNext(!isXNext);
  };
  return (
    <>
      <div>{winner && <p>Winner: {winner}</p>}</div>

      <div className="grid grid-cols-3 gap-2">
        {square.map((value, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="w-20 h-20 text-3xl font-bold border border-gray-400 rounded-lg shadow-md flex items-center justify-center bg-white hover:bg-gray-200 transition"
          >
            {value}
          </button>
        ))}
      </div>
    </>
  );
};
const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
console.log(WINNING_COMBOS.length, "length of winning combos");

const calculateWinner = (squares: any) => {
  for (let i = 0; i < WINNING_COMBOS.length; i++) {
    const [a, b, c] = WINNING_COMBOS[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Return the winner ("X" or "O")
    }
  }
  return null; // No winner
};

export default Games;
