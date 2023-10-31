import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import { useState } from "react";
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome.jsx'
import AllTheBooks from './components/AllTheBooks.jsx'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [theme, setTheme] = useState('light')

  return (
    <div className="App">
      <MyNav 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        theme={theme} 
        setTheme={setTheme}
      />
      <Container>
        <Welcome theme={theme}/>
        <AllTheBooks searchQuery={searchQuery}/>
      </Container>
      <MyFooter />

    </div>
  );
}

export default App
