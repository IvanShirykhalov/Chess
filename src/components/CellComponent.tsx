import React, {FC} from 'react';
import {Cell} from "../models/figures/Cell";

interface CellProps {
    cell: Cell
}

export const CellComponent: FC<CellProps> = ({cell}) => {
    return (
        <div className={['cell', cell.color].join(' ')}>

        </div>
    );
};
