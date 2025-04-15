import { useState } from 'react';
import cristianLogo from '@assets/cristian.png';
import './App.css';
import Header from '@components/Header';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Header />
      <div>
        <a href="#" target="_blank">
          <img src={cristianLogo} className="logo" alt="Cristian Duran Avatar" />
        </a>
      </div>
      <h1>Cristian Duran</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Development by Cristian Duran
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Cristian Duran logo to learn more
      </p>
    </>
  )
}

export default App
