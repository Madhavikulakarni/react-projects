import logoImg from "../images/brand_logo.png";
const Navigation=()=>{
  return(
    <div>
      <nav>
        <div className="logoContainer">
          <img src={logoImg} alt="logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button className="primary-btn">Login</button>
      </nav>
    </div>
  )
}
export default Navigation;