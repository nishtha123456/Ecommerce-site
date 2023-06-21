
import {Link} from 'react-router-dom'
import 'jquery/dist/jquery.min.js'; // Have to install and import jQuery because of bootstrap modal's dependency
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="/">E-Commerce</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id='navbarNav'>
    <ul className="navbar-nav mr-auto ">
      <li className="nav-item ">
        <Link className="nav-link" to="/Login">Login </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Customer">Customers</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Product">Products</Link>
        
      </li>
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/">Action</a></li>
            <li><a class="dropdown-item" href="/">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
      </ul>
  </div>
  
</nav>
 </div>
   );
}

export default Navbar;
