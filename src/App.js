
import './App.css';
import './components/NavBar';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ListContainer from './components/ListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Tienda from './pages/Tienda';
import AquaSistem from './pages/AquaSistem';
import Sigas from './pages/Sigas';
import Cart from './pages/Cart';
import { CartContextProvider } from './context/cartContext';
import ItemDetail from './components/ItemDetail';



function App() {
  return (<>
  <CartContextProvider>
  <BrowserRouter>
    <NavBar/>
    
    <Routes>

      <Route path={'/'} element={<Home/>} ></Route>
      {/* //Tienda */}
      
      <Route path={'/Tienda'} element={<ListContainer/>} ></Route>
      {/* <Route path={'/AquaSistem'} element={<AquaSistem/>} ></Route>
      <Route path={'/Sigas'} element={<Sigas/>} ></Route> */}
      <Route path={'/Cart'} element={<Cart/>} ></Route>
      <Route path='/ListContainer' element={<ListContainer/>} />
      <Route path='/ItemDetail/:id' element={<ItemDetail/>} />
      
    </Routes>
    <Footer/>
  </BrowserRouter>
      </CartContextProvider>
    <div className="App">
      <header className="App-header">
      
      </header>
    </div>
    
    </>
  );
}

export default App;
