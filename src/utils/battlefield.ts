import { createArray } from "./array";
import { random } from "./random";

const createHorizontalWarShip = (shipLength: number, maxSize: number) => {
  const maxX = maxSize - shipLength - 1;
  const maxY = maxSize - 1;

  const headX = random(0, maxX);
  const headY = random(0, maxY);

  return createArray(shipLength, (i) => {
    return { y: headY, x: headX + i };
  });
};

const createVerticalWarShip = (shipLength: number, maxSize: number) => {
  const maxX = maxSize - 1;
  const maxY = maxSize - shipLength - 1;

  const headX = random(0, maxX);
  const headY = random(0, maxY);

  return createArray(shipLength, (i) => {
    return { y: headY + i, x: headX };
  });
};

type Point = { x: number; y: number };
export const createWarShip = (shipLength: number, maxSize: number): Point[] => {
  const postion = random(0, 2) % 2 === 0 ? "horizontal" : "vertical";
  return postion === "horizontal"
    ? createHorizontalWarShip(shipLength, maxSize)
    : createVerticalWarShip(shipLength, maxSize);
};
