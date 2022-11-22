import React, {FC, Fragment} from 'react';
import {Board} from "../models/Board";
import {CellComponent} from "./CellComponent";

interface BoardProps {
    board: Board
    setBoard: (board: Board) => void
}

export const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {
    return (
        <div className={'board'}>
            {board.cells.map((row, index) =>
                <Fragment key={index}>
                    {row.map(cell =>
                        <CellComponent
                            cell={cell}
                            key={cell.id}
                        />
                    )}
                </Fragment>
            )}
        </div>
    );
};
