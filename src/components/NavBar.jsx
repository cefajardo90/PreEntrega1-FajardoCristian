import logoAM from "../assets/images/Logo-AM.jpg";
import CartWidget from "./CartWidget";
import Search from "./Search";

const NavBar = () => {
  return (
    <div className="container-fluid">
      <div className="row bg-black">
        <div className="col d-flex align-items-center"><Search/></div>
        <div className="col-md text-center">
          <a href="#">
            <img src={logoAM} alt="AM LUJOS" width={180} />
          </a>
        </div>
        <div className="col d-flex align-items-center justify-content-end">
          <CartWidget />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link text-dark" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Accesorios internos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Accesorios externos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Repuestos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
