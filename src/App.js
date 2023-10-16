import './App.css';

import FuncContext from './fContext';

import AuthControler from "./Componnets/Pages/AuthController"
function App() {
  return (
    
      <div className='app-body'>
        <FuncContext>
<AuthControler/>
</FuncContext>
      </div>
   
  );
}

export default App;
