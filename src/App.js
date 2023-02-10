import { Routes, Route, HashRouter } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import HousingDetails from "./pages/HousingDetails/HousingDetails"
import Error from "./pages/Error/Error"
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer"
import "./App.module.css"


function App() {
  return(
    <HashRouter>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/housingDetails/:id" element={ <HousingDetails/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="*" element={ <Error/> } />
      </Routes>
      <Footer/>
    </HashRouter>
  )
}

export default App;
