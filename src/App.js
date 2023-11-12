import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContext } from "./context/SearchContext.jsx";
import { ToastContainer } from "react-toastify";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import NotFound from "./components/NotFound.jsx";
import AllTheBooks from "./components/AllTheBooks.jsx";
import BookDetails from "./components/BookDetails.jsx";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [theme, setTheme] = useState("light");
  const [selected, setSelected] = useState("");

  return (
    <div style={{background: theme === 'light' ? "#fff" : "#191414"}}>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          {/* NavBar */}
          <MyNav
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setTheme={setTheme}
          />

          <Routes>
            {/* Path: "/"  */}
            <Route path="/" element={ <AllTheBooks
                  searchQuery={searchQuery}
                  selected={selected}
                  setSelected={setSelected}
                />
              }
            />

            {/* Path: "BookDetail" */}
            <Route
              path="/bookDetail/:genre/:asin"
              element={<BookDetails />}
            ></Route>

            {/* Path: "404" */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

        <MyFooter />
        <ToastContainer position="bottom-right" />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
