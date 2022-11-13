
import './App.css';
import NavBar from './organisms/NavBar';
import MainRoutes from './Routes/MainRoutes';
import CartPage from './pages/CartPage';

import HomePage from './pages/HomePage';

import Footer from "./Component/Footer/Footer"
import ProductPage from './pages/ProductPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Checkout } from './pages/Checkout';


function App() {
  return (
    <div >

      {/* <NavBar/> */}
      {/* <MainRoutes/>
     <CartPage /> */}
      {/* <ProductPage /> */}


      <NavBar />

      {/* <HomePage/> */}
      {/* <Login />
      <Signup /> */}
      

      <MainRoutes/>
<Footer/>

      {/* <CartPage /> */}
      {/* <Checkout /> */}


    </div>

  );
}

export default App;
