import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header"
import Productdetail from "./components/Productdetail"
import Cart from "./components/Cart"
import Home from './components/Home';
import '../src/assets/stylesheets/App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/detailpage' element={<Productdetail />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
    </div>
  );
}

export default App;
