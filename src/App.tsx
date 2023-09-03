import './App.css';
import reactLogo from './assets/react.svg';
import { ComponentList } from './pages/ComponentList';
import viteLogo from '/vite.svg';
import vitestLogo from './assets/vitest.png';

function App() {

  return (
    <>
      <div className='app'>
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <a href="https://vitest.dev" target="_blank" rel="noreferrer">
            <img src={vitestLogo} className="logo vitest" alt="Vitest logo" />
          </a>
          <h1>Vite + React + Vitest</h1>
        </div>
        <ComponentList />
      </div>
    </>
  );
}

export default App;
