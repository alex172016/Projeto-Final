/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable import/no-anonymous-default-export */


import "./Card02.css"
import { Link } from "react-router-dom";

export default(props) =>{
    return(

      <div class="card bg-dark text-white">
            <img src={props.Foto} className="card-img" alt="..."/>
        
  
  <nav className="navbar navbar-light bg-light fixed-top">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" >Agencia Autoestima</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
          </li>
          <li className="nav-item">
            <Link to ="/Destino" className="nav-link" >Destino</Link>
          </li>
          <li className="nav-item dropdown">
            <Link to="/Compra" className="nav-link dropdown-toggle" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Compra
            </Link>
            <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
              <li><Link to ="/CadastrarCliente" className="dropdown-item" >Cadastro</Link></li>
              <li><Link to="/ConsultaCliente" className="dropdown-item" >Consulta</Link></li>
              <li><Link to ="/ExcluirCliente" className="dropdown-item">Excluir</Link></li>
            </ul>
            <li className="nav-item">
    <Link to ="/Sac" className="nav-link" >Ajuda</Link>
  </li>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</div>



    );
}