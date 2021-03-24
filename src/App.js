import logo from './logo.svg';
import './App.css';
import Header from './Header/header'
import Body from './Body/Body'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header></Header>
    <Body></Body>
    </div>
    </BrowserRouter>
  );
}

export default App;
