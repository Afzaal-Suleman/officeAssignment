import { useState } from "react";

const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // columns
  [0, 4, 8],
  [2, 4, 6], // diagonals
];

export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(squares);

  const status = winner
    ? ` Winner: ${winner}`
    : squares.every(Boolean)
    ? " It's a Draw!"
    : `Next Turn: ${isXNext ? "X" : "O"}`;
  console.log(winner, 5);

  function handleClick(index: any) {
    if (squares[index] || winner) return;

    const nextSquares = squares.slice();

    nextSquares[index] = isXNext ? "X" : "O";
    const randomNumber = Math.floor(Math.random() * 9);
    console.log(randomNumber, "random number");
    setSquares(nextSquares);
    setIsXNext(!isXNext);
  }

  function restartGame() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <p className="text-lg mb-4">{status}</p>
      <div className="grid grid-cols-3 gap-2">
        {squares.map((value, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="w-20 h-20 text-3xl font-bold border border-gray-400 rounded-lg shadow-md flex items-center justify-center bg-white hover:bg-gray-200 transition"
          >
            {value}
          </button>
        ))}
      </div>
      <button
        onClick={restartGame}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Restart Game
      </button>
    </div>
  );
}

function calculateWinner(squares: any) {
  for (let combo of WINNING_COMBOS) {
    const [a, b, c] = combo;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
