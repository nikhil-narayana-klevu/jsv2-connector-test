import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import Hits from './Hits';
import SearchBox from './SearchBox';
import klevu from './klevu';
import { createContext, useEffect, useState } from 'react';
import run from './quicksearch';

export const AppContext = createContext();

function App() {
  const [ctxVal, setCtxVal] = useState(0);

  return (
    <div className="App kuContainer" id="kuThemeContentContainer">
      <AppContext.Provider value={ctxVal}>
      <Parent>
        <SearchBox />
        <Hits />
        <button onClick={() => setCtxVal(ctxVal + 1)}>
          Change context value
        </button>
      </Parent>
      </AppContext.Provider>
    </div>
  );
}

export default App;
