
import './App.css';
import './components/NavBar';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/Home';
import Tienda from './category/Tienda';
import AquaSistem from './category/categoryAquaSistem/AquaSistem';
import Sigas from './category/categorySigas/Sigas';
import CodoNormalSigas from './category/categorySigas/productsSigas/CodoNormalSigas';

function App() {
  return (<>
  <BrowserRouter>
    <NavBar/>
    
    <Routes>

      <Route path={'/'} element={<Home/>} ></Route>
      {/* //Tienda */}
      <Route path={'/Tienda'} element={<Tienda/>} ></Route>
      <Route path={'/AquaSistem'} element={<AquaSistem/>} ></Route>
      <Route path={'/Sigas'} element={<Sigas/>} ></Route>
      <Route path={'/CodoNormalSigas'} element={<CodoNormalSigas/>} ></Route>

    </Routes>
    <Footer/>
  </BrowserRouter>
      
    <div className="App">
      <header className="App-header">
      
      </header>
    </div>
    
    </>
  );
}

export default App;
