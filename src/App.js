import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import NotFound from './components/NotFound.jsx';
import AllTheBooks from './components/AllTheBooks.jsx'
import BookDetails from './components/BookDetails.jsx';
import ThemeContext from './context/SearchContext.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [theme, setTheme] = useState('light')
  const [selected, setSelected] = useState('')

  return (
    <ThemeContext.Provider value={theme}>
      <div
        className="App"
        style={{ backgroundColor: theme === 'light' ? '#fff' : '#121212' }}
      >
        <BrowserRouter>

          {/* NavBar */}
          <MyNav
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            theme={theme}
            setTheme={setTheme}
          />

          <Routes>
            {/* Path: "/"  */}
            <Route path='/' element={<AllTheBooks searchQuery={searchQuery} theme={theme} selected={selected} setSelected={setSelected} />}/>

            {/* Path: "BookDetail" */}
            <Route path='/bookDetail/:genre/:id' element={<BookDetails />}></Route>

            {/* Path: "404" */}
            <Route path='*' element={<NotFound />} />
          </Routes>

        </BrowserRouter>

        <MyFooter theme={theme} />
        <ToastContainer position='bottom-right'/>

      </div>
    </ThemeContext.Provider>
  )
}

export default App
