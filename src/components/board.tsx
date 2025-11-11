import { Square } from './square';
import { calculateWinner } from '../utils/calculateWinner';
import { Alert, AlertTitle } from "@/components/ui/alert"
import { Sparkle, CircleCheckBig, Flag } from 'lucide-react';

interface BoardProps {
    xIsNext: boolean;
    squares: (string | null)[];
    onPlay: (nextSquares: (string | null)[], squareIndex: number) => void;
}

export function Board({ xIsNext, squares, onPlay }: BoardProps) {
    function handleClick(i: number) {
        const winnerResult = calculateWinner(squares);

        if (winnerResult || squares[i]) {
            return;
        }

        const nextSquares = squares.slice();

        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }

        onPlay(nextSquares, i);
    }

    const winnerResult = calculateWinner(squares);
    const winningLine = winnerResult ? winnerResult.line : [];
    let status;
    
    if (winnerResult) {
        status = (
            <>
                <CircleCheckBig />
                <AlertTitle>
                    Winner is {winnerResult.winner}!
                </AlertTitle>
            </>
        );
    } else if (squares.every(square => square !== null)) {
        status = (
            <>
                <Flag />
                <AlertTitle>
                    Draw! No one wins.
                </AlertTitle>
            </>
        );
    } else {
        status = (
            <>
                <Sparkle />
                <AlertTitle>
                    Next player: {xIsNext ? <span className="text-blue-500 font-bold">X</span> : <span className="text-red-500 font-bold">O</span>}
                </AlertTitle>
            </>
        );
    }

    return (
        <>
            {/* Status Alert */}
            <Alert className="mb-3 md:mb-4">
                {status}
            </Alert>

            {/* Game Board */}
            <div className="aspect-square grid grid-cols-1 grid-rows-3 w-full divide-y border-2 md:border-3 bg-white/15 rounded-xl shadow-md backdrop-blur-md overflow-hidden">
            {
                Array.from({ length: 3 }, (_, row) => (
                    <div key={row} className="grid grid-cols-3 grid-rows-1 divide-x">
                        {
                            Array.from({ length: 3 }, (_, col) => {
                                const i = row * 3 + col;
                                return (
                                    <Square 
                                        key={i} 
                                        value={squares[i]} 
                                        onSquareClick={() => handleClick(i)}
                                        isWinning={winningLine.includes(i)}
                                    />
                                );
                            })
                        }
                    </div>
                ))
            }
            </div>
        </>
    );
}
