import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Crypto from "./components/pages/Crypto";
import Trending from "./components/pages/Trending";
import Favourites from "./components/pages/Favourites";
import CryptoDetails from "./components/CryptoDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Crypto />}>
            <Route path="/:Coinid" element={<CryptoDetails />} />
          </Route>
          <Route path="/trending" element={<Trending />}>
            <Route path="/trending/:Coinid" element={<CryptoDetails />} />
          </Route>
          <Route path="/favourites" element={<Favourites />}>
            <Route path="/favourites/:Coinid" element={<CryptoDetails />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
