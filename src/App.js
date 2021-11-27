import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-primary bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Login-Page</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="Home.js">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
              <li className="nav-item">
                <a className="nav-link disabled">More</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <h1 className="text-primary text-center text capatalize"> Welcome To My</h1>
      <h1 className="text-center text-primary">Login Page</h1>
      <div className="mb-3 row mx-5 my-2">
        <label for="Email" className="form-label" >Email</label>
        <div className="col-sm-10" >
          <input type="text" className="form-control" id="Email" placeholder="name@example.com"  />
        </div>

      </div>
      <div container className="mb-3 row mx-5">
        <label for="inputPassword" className="form-label">Password</label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="inputPassword" />
        </div>
      </div>
      <br></br>
      <div className="text-center container">
        <button className="btn btn-primary">Log-In</button>
      </div>


    </>
  );
}

export default App;
