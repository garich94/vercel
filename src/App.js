import "./index.scss";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <h2>Счетчик: {count}</h2>
        <h1>{count}</h1>
        <button
          disabled={count === 00}
          onClick={() => setCount(count - 1)}
          className="minus"
        >
          - Минус
        </button>
        <button onClick={() => setCount(count + 1)} className="plus">
          Плюс +
        </button>
        <button onClick={() => setCount(0)} className="sbros">
          Сброс
        </button>
      </div>
    </div>
  );
}

export default App;
