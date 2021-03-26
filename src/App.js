import logo from './logo.svg';
import './App.css';
import Header from './Header/header'
import Body from './Body/body'
import Footer from './Footer/footer'
//import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
