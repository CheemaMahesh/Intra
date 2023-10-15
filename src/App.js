import './App.css';
// import SignIn from './Componnets/Auth/SignIn';
// import SignUp from './Componnets/Auth/SignUp';
import AsController from './Componnets/Pages/ASController';
import AuthDetails from './Componnets/AuthDetails';
import FuncContext from './fContext';
import Home from './Componnets/Pages/Home';
import Cart from './Componnets/Pages/Cart';
import Orders from './Componnets/Pages/Orders';
import AuthControler from "./Componnets/Pages/AuthController"
function App() {
  return (
    
      <FuncContext>
<AuthControler/>
</FuncContext>
   
  );
}

export default App;
