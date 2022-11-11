
import './App.css';
import NavBar from './organisms/NavBar';
import MainRoutes from './Routes/MainRoutes';
import CartPage from './pages/CartPage';
import HomePage  from './pages/HomePage';

function App() {
  return (
    <div >
      <NavBar/>
     {/* <MainRoutes/> */}
    
      {/* <CartPage /> */}
      <HomePage/>
    </div>
    
  );
}

export default App;
