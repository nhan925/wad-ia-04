import { useState } from 'react';

interface HistoryEntry {
    squares: (string | null)[];
    location: { row: number; col: number } | null;
}

export function useGameState() {
    const [history, setHistory] = useState<HistoryEntry[]>([
        { squares: Array(9).fill(null), location: null }
    ]);
    const [currentMove, setCurrentMove] = useState(0);
    const [isAscending, setIsAscending] = useState(true);
    
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove].squares;

    // Handle a play made by a player
    function handlePlay(nextSquares: (string | null)[], squareIndex: number) {
        const row = Math.floor(squareIndex / 3);
        const col = squareIndex % 3;
        const nextHistory = [
          ...history.slice(0, currentMove + 1), 
          { squares: nextSquares, location: { row, col } }
        ];

        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    // Jump to a specific move in history
    function jumpTo(nextMove: number) {
        setCurrentMove(nextMove);
    }

    // Toggle the sort order of the move list
    function toggleSortOrder() {
        setIsAscending(!isAscending);
    }

    // Reset the game to the initial state
    function resetGame() {
        setHistory([{ squares: Array(9).fill(null), location: null }]);
        setCurrentMove(0);
    }

    return {
        history,
        currentMove,
        isAscending,
        xIsNext,
        currentSquares,
        handlePlay,
        jumpTo,
        toggleSortOrder,
        resetGame
    };
}
