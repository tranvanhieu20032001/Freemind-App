import { createContext, useState } from 'react';
import './App.css';
import Home from './pages/home/Home';

export const showLeftBarContext = createContext()
function App() {

  const [showleftbar, setShowleftbar] = useState(false)
  const _showLeftbar = () => {
    setShowleftbar(!showleftbar)
    console.log("Show");

  }
  const value = {
    showleftbar,
    _showLeftbar
  }
  return (
    <showLeftBarContext.Provider value={value}>
      <div className="App">
        <Home />
      </div>
    </showLeftBarContext.Provider>
  );
}

export default App;
