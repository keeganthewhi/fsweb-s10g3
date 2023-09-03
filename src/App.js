import { useEffect, useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, resetFavorite } from "./actions/favActions";

function App() {
  const [sira, setSira] = useState(0);
  const [btnDisable, setBtnDisable] = useState(null);
  const favMovies = useSelector((store) => store.favReducer);
  const favDispatch = useDispatch();

  const movies = useSelector((store) => store.movies_reducer);

  function sonrakiFilm() {
    setSira(sira + 1);
  }

  function OncekiFilm() {
    setSira(sira - 1);
  }

  const favAddMethod = (value) => {
    favDispatch(addFavorite(value));
  };

  const favResetMethod = () => {
    favDispatch(resetFavorite());
  };

  useEffect(() => {
    console.log("sira-degeri : ", sira);
    sira === 0 ? setBtnDisable(false) : setBtnDisable(true);
  }, [sira]);

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Filmler
        </NavLink>
        <NavLink
          to="/listem"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie sira={sira} />

          <div className="flex gap-3 justify-end py-3">
            {btnDisable && (
              <button
                onClick={OncekiFilm}
                className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
              >
                Önceki
              </button>
            )}
            {sira !== movies.length - 1 && (
              <button
                onClick={sonrakiFilm}
                className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
              >
                Sıradaki
              </button>
            )}
            <button
              className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
              onClick={() => favAddMethod(movies[sira])}
            >
              Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
            {favMovies.length !== 0 && (
              <button
                className="px-3 py-2 block text-sm rounded bg-rose-700 text-white hover:tracking-wide"
                onClick={favResetMethod}
              >
                Listeyi -Temizle
              </button>
            )}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
