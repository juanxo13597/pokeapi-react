import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home";
import PokemonInfo from "./pages/PokemonInfo/PokemonInfo";
import NotFound from "./pages/NotFound/notFound";

function App() {

  return (
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="pokemon/:name" element={<PokemonInfo />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
