import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import HousingDetail from "./pages/HousingDetails/HousingDetails"
import Error from "./pages/Error/Error"
import styles from "./App.module.css"
import Header from './components/Header/Header';


function App() {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/housingDetail/:id" element={ <HousingDetail/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="*" element={ <Error/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
