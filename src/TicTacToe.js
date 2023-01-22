import './TicTacToe.css';
import { useState } from "react";

let mementoIndex = -1;

export default function TicTacToe() {

    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);

    const [turn, setTurn] = useState("X");

    const [winner, setWinner] = useState("");

    const [memento, setMemento] = useState([]);

    function handleTurn(index) {
        if (mementoIndex !== memento.length - 1) {
            return;
        }

        if (board[index] === "") {
            saveMemento();
            updateTile();
            checkForWinner();
        }

        function updateTile() {
            setTurn(turn === "X" ? "O" : "X");
            board[index] = turn;
            setBoard([...board]);
        }

        function checkForWinner() {
            if (board[0] === board[1] && board[1] === board[2] && board[0] !== "") {
                setWinner(board[0]);
            }

            if (board[3] === board[4] && board[4] === board[5] && board[3] !== "") {
                setWinner(board[3]);
            }

            if (board[6] === board[7] && board[7] === board[8] && board[6] !== "") {
                setWinner(board[6]);
            }

            if (board[0] === board[3] && board[3] === board[6] && board[0] !== "") {
                setWinner(board[0]);
            }

            if (board[1] === board[4] && board[4] === board[7] && board[1] !== "") {
                setWinner(board[1]);
            }

            if (board[2] === board[5] && board[5] === board[8] && board[2] !== "") {
                setWinner(board[2]);
            }

            if (board[0] === board[4] && board[4] === board[8] && board[0] !== "") {
                setWinner(board[0]);
            }

            if (board[2] === board[4] && board[4] === board[6] && board[2] !== "") {
                setWinner(board[2]);
            }
        }

        function saveMemento() {
            console.log("BEFORE", memento);
            memento.push({
                board: [...board],
                turn: turn,
                winner: winner
            });
            setMemento([...memento]);
            mementoIndex++;
            console.log("AFTER", memento);
        }
    }

    function restoreMemento(index) {
        setBoard(memento[index].board);
        setTurn(memento[index].turn);
        setWinner(memento[index].winner);
        mementoIndex = index;
    }

    const boardMarkup = board.map((_, index) => {
        return <button key={index} className="square" onClick={() => handleTurn(index)}>{board[index]}</button>;
    });

    const mementoMarkup = memento.map((_, index) => {
        return <button key={index} onClick={() => restoreMemento(index)}>Go to turn {index}</button>;
    });

    return (
        <>
            {winner !== "" ? (<h1>{winner} wins!</h1>) : (<h1>It's {turn}'s turn</h1>)}
            <div className="container">
                {boardMarkup}
            </div>
            <div>
                {memento.length > 0 ? mementoMarkup : null}
            </div>
        </>
    );
}

