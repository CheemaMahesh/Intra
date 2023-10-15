import './App.css';
import SignIn from './Componnets/Auth/SignIn';
import SignUp from './Componnets/Auth/SignUp';
import AuthDetails from './Componnets/AuthDetails';
import FuncContext from './fContext';
function App() {
  return (
    
      <FuncContext>
<SignIn/>
<SignUp/>
<AuthDetails/>
</FuncContext>
   
  );
}

export default App;
