import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header"
import Productdetail from "./components/Productdetail"
import Cart from "./components/Cart"
import Home from './components/Home';
import Pagenotfound from "./components/Pagenotfound"
import Newproducts from "./components/Newproducts"
import Featureproducts from "./components/Featureproducts"
import '../src/assets/stylesheets/App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
                <Route path='/' element={<Home />} />
                <Route path='detailpage' element={<Productdetail />}>
                  <Route path='feature' element={<Featureproducts/>}></Route>  
                  <Route path='new-products' element={<Newproducts/>}></Route>  
                </Route>
                <Route path='cart' element={<Cart />} />
                <Route path='*' element={<Pagenotfound />} />
            </Routes>
    </div>
  );
}

export default App;
