import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{counter}</h3>
        <div>
          <button disabled={disabled} data-testid="minus-button" onClick={() => setCounter((counter) => counter - 1)}>-</button>
          <button disabled={disabled} data-testid="plus-button" onClick={() => setCounter((counter) => counter + 1)}>+</button>
        </div>
        <div><button onClick={() => setDisabled((prev) => !prev)} style={{ backgroundColor: "blue" }} data-testid="on/off-button">on/off</button></div>
      </header>
    </div>
  );
}

export default App;
