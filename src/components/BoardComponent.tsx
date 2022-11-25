import React, {FC, Fragment, useEffect, useState} from 'react';
import {Board} from "../models/Board";
import {CellComponent} from "./CellComponent";
import {Cell} from "../models/Cell";
import {Player} from "../models/Player";

interface BoardProps {
    board: Board
    setBoard: (board: Board) => void
    currentPlayer: Player | null
    swapPlayer: () => void
}

export const BoardComponent: FC<BoardProps> = ({board, setBoard, currentPlayer, swapPlayer}) => {

    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    const click = (cell: Cell) => {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            swapPlayer()
            selectedCell.moveFigure(cell)
            setSelectedCell(null)
        } else {
            if (cell.figure?.color === currentPlayer?.color) {
                setSelectedCell(cell)
            }
        }
    }

    useEffect(() => {
        highlightCells()
    }, [selectedCell])

    const highlightCells = () => {
        board.highlightCells(selectedCell)
        updateBoard()
    }

    const updateBoard = () => {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    return (
        <div>
            <h3>Current player {currentPlayer?.color}</h3>
            <div className={'board'}>
                {board.cells.map((row, index) =>
                    <Fragment key={index}>
                        {row.map(cell =>
                            <CellComponent
                                click={click}
                                cell={cell}
                                key={cell.id}
                                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                            />
                        )}
                    </Fragment>
                )}
            </div>
        </div>
    );
};
