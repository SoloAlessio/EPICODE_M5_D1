import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome.jsx'
import LatestReleases from './components/LatestReleases.jsx'

function App() {
  return (
    <div className="App">
      <MyNav />
      <Container>
        <Welcome />
        <LatestReleases />
      </Container>
      <MyFooter />

    </div>
  );
}

export default App
