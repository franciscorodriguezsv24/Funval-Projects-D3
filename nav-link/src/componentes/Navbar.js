import {Link} from 'react-router-dom';
import {FaAmilia} from "react-icons/fa";

function Navbar(){
    return(
 <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
       <Link className="navbar-brand" to="/"><FaAmilia/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria- expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
       <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
         <div className="navbar-nav">
           <Link className="nav-link active" to="/home">Home</Link>
           <Link className="nav-link" to="/features">Features</Link>
           <Link className="nav-link" to="/store">Store</Link>
         </div>
       </div>
    </div>
 </nav>
    );
}

export default Navbar