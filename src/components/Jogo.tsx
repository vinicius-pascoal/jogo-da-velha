import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Player = "X" | "O" | null;
type Winner = "X" | "O" | "draw" | null;

export default function Jogo() {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const [winner, setWinner] = useState<Winner>(null);

  //TODO adicionar salvar o score no local storage
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (newBoard: Player[]): Winner => {
    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return newBoard[a];
      }
    }
    if (newBoard.every((cell) => cell !== null)) return "draw";
    return null;
  };

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    const result = checkWinner(newBoard);

    setBoard(newBoard);
    setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
    setWinner(result === "draw" ? "draw" : result);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
  };

  useEffect(() => {
    if (winner === "X" || winner === "O") {
      toast.success(`Vitória de ${winner}! 🎉`);
    } else if (winner === "draw") {
      toast.info("Empate! 🤝");
    }
  }, [winner]);

  return (
    <div className="flex flex-col items-center justify-center text-white gap-5">
      <ToastContainer />
      <div className="grid grid-cols-3">
        {board.map((cell, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(idx)}
            className="w-20 h-20 text-3xl flex items-center justify-center border border-cyan-600"
          >
            <AnimatePresence>
              {cell && (
                <motion.span
                  key={cell + idx}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {cell}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        ))}
      </div>

      <button
        onClick={resetGame}
        className=" relative -bottom-14 right-1/3 mt-6 px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition"
      >
        Reiniciar
      </button>
    </div>
  );
}
