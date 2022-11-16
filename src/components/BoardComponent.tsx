import React, {FC, Fragment} from 'react';
import {Board} from "../models/figures/Board";
import {CellComponent} from "./CellComponent";

interface BoardProps {
    board: Board
    setBoard: (board: Board) => void
}

export const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {
    return (
        <div className={'board'}>
            {board.cell.map((row, index) =>
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
