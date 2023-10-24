import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './MyNav.jsx'
import MyFooter from './MyFooter.jsx'
import Welcome from './Welcome.jsx'
import LatestReleases from './LatestReleases.jsx'

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <LatestReleases />
      <MyFooter />

    </div>
  );
}

export default App
