import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import 'jquery/dist/jquery.min.js'; // Have to install and import jQuery because of bootstrap modal's dependency
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Component/Navbar'
import Login from './Component/Login';
import Customer from './Component/Customer'
import Product from './Component/Product';
import ShoppingCart from './Component/ShoppingCart';
import Banner from './Component/Banner'
import Example from './Component/Example'
import Example1 from './Component/Example1'
function App() {
  return (
    <> 
    <BrowserRouter>
    
       <Navbar/>
      
       

       <Routes>
        <Route exact path='/' element={<Banner />}/>
        <Route exact path='/Example1'  element={<Example1/>} />
        <Route exact path='/Login' element={<Login />}/>
        <Route exact path='/Customer' element={<Customer />}/>
        <Route exact path='/Product' element={<Product />}/> 
        <Route exact path='/Product/ShoppingCart' element={<ShoppingCart />}/>
       </Routes>
       
       </BrowserRouter>
    </>

      );
}

export default App;
