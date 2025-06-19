import { useEffect, useState } from "react";

const Wordle = () => {
  const [allGuesses, setAllGuesses] = useState<any[][]>([]);
  const [guess, setGuess] = useState<string>("");
  const [tries, setTries] = useState<number>(0);
  const [targetArray, setTargetArray] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [win, setWin] = useState<boolean>(false);
  const wordList = ["apple", "grape", "peach", "berry", "melon"];

  useEffect(() => {
    const targetWord = wordList[Math.floor(Math.random() * wordList.length)];
    setTargetArray(targetWord.split(""));
    console.log(targetWord);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.toLowerCase();
    setGuess(input);
  };

  const handleCheck = () => {
    if (guess.length !== 5 || tries >= 4) return;

    const colors: string[] = Array(5).fill("gray");
    const result: { letter: string; color: string }[] = [];

    for (let i = 0; i < 5; i++) {
      if (guess[i] === targetArray[i]) {
        colors[i] = "green";
      }
    }

    for (let i = 0; i < 5; i++) {
      if (colors[i] !== "green" && targetArray.includes(guess[i])) {
        colors[i] = "yellow";
      }
    }

    for (let i = 0; i < 5; i++) {
      result.push({ letter: guess[i], color: colors[i] });
    }

    setAllGuesses((prev) => [...prev, result]);
    setTries(tries + 1);
    setGuess("");

    if (colors.every((c) => c === "green")) {
      setWin(true);
      setGameOver(true);
    } else if (tries + 1 >= 4) {
      setGameOver(true);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 w-full h-screen">
      <input
        type="text"
        placeholder="Enter your guess"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5"
        onChange={handleChange}
        value={guess}
        maxLength={5}
        disabled={tries >= 4}
      />
      <button
        onClick={handleCheck}
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={tries >= 4}
      >
        Check
      </button>

      <div className="flex flex-col gap-2 mt-4">
        {allGuesses.map((guessRow) => (
          <div className="flex gap-2 justify-center">
            {guessRow.map((item, colIndex) => (
              <span
                key={colIndex}
                className={`inline-block w-10 h-10 text-center text-white font-bold leading-10 rounded ${
                  item.color === "green"
                    ? "bg-green-500"
                    : item.color === "yellow"
                    ? "bg-yellow-500"
                    : "bg-gray-500 text-black"
                }`}
              >
                {item.letter.toUpperCase()}
              </span>
            ))}
          </div>
        ))}
      </div>
      {win && (
        <div className="mt-4 text-green-600 font-bold text-lg">You Win!</div>
      )}
      {!win && tries && gameOver && (
        <div className="mt-4 text-red-600 font-semibold">Game Over!</div>
      )}
    </div>
  );
};

export default Wordle;
