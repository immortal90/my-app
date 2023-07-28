import React from "react";
import "./style.css";
import { HeaderWithCounter } from "./HeaderWithCounter";
import { Battlefield } from "./Battlefield";
import { ResetButton } from "./ResetButton";
import { useGameState } from "./state/useGameState";

export default function App() {
  const { turn, reset, matrix, fire, won } = useGameState();

  if (won) {
    alert("MOSKOW DOWN");
  }
  return (
    <div className="app">
      <HeaderWithCounter turn={turn} />
      <Battlefield matrix={matrix} onFire={fire} />
      <ResetButton reset={reset} />
    </div>
  );
}
