import * as React from "react";
import { CHECKED_SHIP, CHECKED_WATER, SEA, SHIP } from "./state/cellstate";

type CellProps = {
  value: number;
  handleClick: (y: number, x: number) => void;
  x: number;
  y: number;
};

type CellStateMapType = {
  [key: number]: string;
};

const cellStateMap: CellStateMapType = {
  [SEA]: "",
  [SHIP]: "",
  [CHECKED_WATER]: "🌊",
  [CHECKED_SHIP]: "💥",
};

const Cell = ({ handleClick, value, x, y }: CellProps) => {
  return (
    <button className={"cell"} onClick={() => handleClick(y, x)}>
      {cellStateMap[value]}
    </button>
  );
};
type BattlefieldProps = {
  matrix: number[][];
  onFire: (y: number, x: number) => void;
};
export const Battlefield = ({ matrix, onFire }: BattlefieldProps) => {
  return (
    <div>
      {matrix.map((line, lineNumber) => (
        <div className={"line"} key={lineNumber}>
          {line.map((v, i) => (
            <Cell
              key={`${lineNumber}${i}`}
              value={v}
              y={lineNumber}
              x={i}
              handleClick={onFire}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
