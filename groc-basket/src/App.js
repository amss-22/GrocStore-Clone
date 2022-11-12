
import './App.css';
import NavBar from './organisms/NavBar';
import MainRoutes from './Routes/MainRoutes';
import CartPage from './pages/CartPage';

import HomePage from './pages/HomePage';


import ProductPage from './pages/ProductPage';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <div >

      {/* <NavBar/> */}
      {/* <MainRoutes/>
     <CartPage /> */}
      <ProductPage />


      <NavBar />
      <Login />
      <Signup />
      {/* <MainRoutes/> */}



      <CartPage />
      {/* <HomePage/> */}


    </div>

  );
}

export default App;
