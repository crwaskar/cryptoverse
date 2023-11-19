import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import './App.css';
import Exchanges from "./components/Exchanges";
import Coins from "./components/Coins";
import CoinDetails from "./components/CoinDetails";


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Exchanges/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/coins" element={<Coins/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/coins/:id" element={<CoinDetails/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;
