import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  const noneNav = () => {
    document.querySelector(".label-xmark").style = "display:none;";
    document.querySelector(".menu-bar").style = "display:none;";
    document.querySelector(".label-bars").style = "display:block;";
  };
  const blockNav = () => {
    document.querySelector(".label-xmark").style = "display:block;";
    document.querySelector(".label-bars").style = "display:none;";
    document.querySelector(".menu-bar").style = "display:flex;";
  };
  const Menu = () => {
    return(
    <>
      <p>
        <Link to={"/"} >Home</Link>
      </p>
      <p>
        <Link to={"/about"}>About</Link>
      </p>
      <p>
        <Link to={"/services"}>Services</Link>
      </p>
      <p>
        <Link to={"/research"}>Research Center</Link>
      </p>
      <p>
        <Link to={"/contact"}>Contact Us</Link>
      </p>
    </>);
  };
  return (
    <header>
      <div className="container">
        <div className="content-navbar">
          <div className="logo">
            <p>
              <Link to={"/"} >
                <img src={require("../../assets/logo.png")} alt="logo"/>
              </Link>
            </p>
          </div>
          
          <div className="menu-header">
            <Menu />
          </div>
          <div className="menu-bar-none">
          <div className="menu-bar">
            <Menu />
          </div>
          </div>
          <div className="icon-menu">
          <label for="toggler" onClick={noneNav} className="label-xmark">
            <i class="fa-solid fa-xmark"></i>
          </label>
          <label for="toggler" onClick={blockNav} className="label-bars">
            <i class="fa-solid fa-bars"></i>
          </label>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;