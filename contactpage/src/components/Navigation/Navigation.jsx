import logoImg from "../../assets/logo.png";
import styles from "./Navigation.module.css";


function Navigation() {
  console.log(styles);
  return (
    <nav className={`${styles.naviagtion} container`}>
      <div className="logo">
        <img src={logoImg} alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navigation;
