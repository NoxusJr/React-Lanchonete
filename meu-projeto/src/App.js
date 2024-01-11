import './App.css';
import NavBar from './components/navbar';
import Header from './components/header'
import Principal from './components/principal';
import OutrosLanches from './components/outrosLanches';
import Local from './components/local'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Header />
      <Principal />
      <OutrosLanches />
      <Local />
    </div>
  )
}

export default App