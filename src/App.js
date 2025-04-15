import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./components/Home";
import { LoginForm } from "./components/LoginForm";
import { fetchAllData } from "./hooks/usePokemonData";
import "./styles.css"
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme/theme";
import { Favorites } from "./components/Favorites";
import { Header } from "./components/Header";

const MainLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";
  const [pokemonData, setPokemonData] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });
  const [memos, setMemos] = useState({});
  const [userId, setUserId] = useState("");
  const [passWord, setPassWord] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  // ページ読み込み時にAPI取得
  useEffect(() => {
    for (let i = 1; i <= 500; i++) {
      fetchAllData(i, setPokemonData)
    }
  }, []);

  // favoritesが変わるたびにローカルストレージに保存
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <>
      {!isLoginPage && <Header />
      }
      <Routes>
        <Route
          path="/"
          element={
            <LoginForm
              userId={userId}
              setUserId={setUserId}
              passWord={passWord}
              setPassWord={setPassWord}
            />
          }
        />
        <Route
          path="/home"
          element={
            <Home
              pokemonData={pokemonData}
              favorites={favorites}
              setFavorites={setFavorites}
              memos={memos}
              setMemos={setMemos}
              setSelectedPokemon={setSelectedPokemon}
              selectedPokemon={selectedPokemon}
              pageType={"homepage"}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              pokemonData={pokemonData}
              favorites={favorites}
              setFavorites={setFavorites}
              memos={memos}
              setMemos={setMemos}
              setSelectedPokemon={setSelectedPokemon}
              selectedPokemon={selectedPokemon}
              pageType={"favoritepage"}
            />
          }
        />
      </Routes>
    </>
  );
}

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </ChakraProvider>
  )
}