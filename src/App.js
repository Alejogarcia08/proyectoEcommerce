import logo from './logo.svg';
import './App.css';
import './components/NavBar';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (<>
      <NavBar></NavBar>
    <div className="App">
      <header className="App-header">
        <ItemListContainer></ItemListContainer>
      </header>
    </div>
    </>
  );
}

export default App;
