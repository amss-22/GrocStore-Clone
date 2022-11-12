
import './App.css';
import NavBar from './organisms/NavBar';
import MainRoutes from './Routes/MainRoutes';
import CartPage from './pages/CartPage';

import HomePage from './pages/HomePage';


import ProductPage from './pages/ProductPage';


function App() {
  return (
    <div >

      {/* <NavBar/> */}
      {/* <MainRoutes/>
     <CartPage /> */}
      <ProductPage />


      <NavBar />
      {/* <MainRoutes/> */}



      <CartPage />
      {/* <HomePage/> */}


    </div>

  );
}

export default App;
