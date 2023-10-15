import './App.css';
import SignIn from './Componnets/Auth/SignIn';
import SignUp from './Componnets/Auth/SignUp';
import AuthDetails from './Componnets/AuthDetails';
import FuncContext from './fContext';
import Home from './Componnets/Pages/Home';
import Cart from './Componnets/Pages/Cart';
import Orders from './Componnets/Pages/Orders';
function App() {
  return (
    
      <FuncContext>
<SignIn/>
<SignUp/>
<AuthDetails/>
<Home/>
<Cart/>
<Orders/>
</FuncContext>
   
  );
}

export default App;
