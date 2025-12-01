import reactLogo from "../images/brand_logo.png";
const Navigation = () => {
  return (
    <div className="container">
      <nav>
        <div className="logo">
          <img src={reactLogo} alt="logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
};
export default Navigation;
