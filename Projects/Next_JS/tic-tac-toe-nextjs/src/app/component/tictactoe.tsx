"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(''));
  const [xIsNext, setXIsNext] = useState(true);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [playerX, setPlayerX] = useState('');
  const [playerO, setPlayerO] = useState('');
  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleClick = (index: number) => {
    const boardCopy = [...board];
    if (boardCopy[index] || calculateWinner(boardCopy)) return;
    boardCopy[index] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXIsNext(!xIsNext);

    const winner = calculateWinner(boardCopy);
    if (winner) {
      if (winner === 'X') {
        setXScore(xScore + 1);
      } else {
        setOScore(oScore + 1);
      }
    }
  };

  const handleReset = () => {
    setBoard(Array(9).fill(''));
    setXIsNext(true);
  };

  const handleStartGame = () => {
    if (playerX && playerO) {
      setIsGameStarted(true);
    }
  };

  const renderSquare = (index: number) => (
    <motion.button
      className="w-16 h-16 border-2 border-gray-500 flex items-center justify-center text-2xl bg-white bg-opacity-80 rounded"
      onClick={() => handleClick(index)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {board[index]}
    </motion.button>
  );

  const calculateWinner = (squares: string[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  let status;
  if (winner) {
    status = `Winner: ${winner === 'X' ? playerX : playerO}`;
  } else {
    status = `Next player: ${xIsNext ? playerX : playerO}`;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      {!isGameStarted ? (
        <div className="flex flex-col items-center bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Enter Player Names</h1>
          <input
            type="text"
            placeholder="Player X Name"
            value={playerX}
            onChange={(e) => setPlayerX(e.target.value)}
            className="mb-2 p-2 border rounded w-64"
          />
          <input
            type="text"
            placeholder="Player O Name"
            value={playerO}
            onChange={(e) => setPlayerO(e.target.value)}
            className="mb-4 p-2 border rounded w-64"
          />
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-all"
            onClick={handleStartGame}
          >
            Start Game
          </button>
        </div>
      ) : (
        <>
          <div className="text-3xl font-semibold mb-4 text-white">{status}</div>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {board.map((_, index) => renderSquare(index))}
          </div>
          <button
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
            onClick={handleReset}
          >
            Reset Game
          </button>
          <div className="flex justify-between w-64 text-white">
            <div className="text-xl">{playerX} (X) Score: {xScore}</div>
            <div className="text-xl">{playerO} (O) Score: {oScore}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default TicTacToe;

