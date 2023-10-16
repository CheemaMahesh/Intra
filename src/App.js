import './App.css';

import FuncContext from './fContext';

import AuthControler from "./Componnets/Pages/AuthController"
import Nav from './Componnets/Pages/Nav';
function App() {
  return (
    
      <div className='app-body'>
        <FuncContext>
          <Nav/>
<AuthControler/>
</FuncContext>
      </div>
   
  );
}

export default App;
