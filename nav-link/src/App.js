import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './componentes/Navbar';
import Home from './componentes/paginas/Home';
import Features from './componentes/paginas/Features';
import Store from './componentes/paginas/Store';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Inicio from './componentes/paginas/Inicio';


function App() {
  return (
 <div className='App'>
    <Router>
      <Navbar/>
         <Routes>
           <Route path='/home' exact Component={Home}/>
           <Route path='/link' exact Component={Features}/>
           <Route path='/store' exact Component={Inicio}/>

         </Routes>
    </Router>

 </div>
    
   
    /* //   <div className="App">
    //    <h1>Nav bar...</h1>
    //    <hr/>
    //   
    //   </div>
    // </Router> */

  );
}

export default App;
