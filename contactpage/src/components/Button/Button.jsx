
import { TbMessage2Filled } from "react-icons/tb";import { MdCall } from "react-icons/md";
import styles from "./Button.module.css";
function Button() {
  return (
    <div>
      <div className={`${styles.topBtn}`}>
        <button className={styles.btn}>
          <TbMessage2Filled />
          VIA SUPPORT CHAT
        </button>
        <button className={styles.btn}>
          <MdCall />
          VIA CALL
        </button>
      </div>
      <button className={styles.btn}>
        <TbMessage2Filled />
        VIA EMAIL FORM
      </button>
    </div>
  );
}

export default Button