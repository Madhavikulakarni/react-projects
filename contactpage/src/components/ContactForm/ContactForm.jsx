import Button from "../Button/Button";
import containerImg from '../../assets/contact.svg'
import styles from './ContactForm.module.css'

function ContactForm() {
  return (
    <div className={styles.container}>
      <div className={styles.contentForm}>
        <Button />
        <form action="">
          <div className={styles.formControl}>
            <label htmlFor="Name">Name</label>
            <input type="text" className={styles.inputClass} />
          </div>

          <div className={styles.formControl}>
            <label htmlFor="E-Mail">E-Mail</label>
            <input type="mail" className={styles.inputClass} />
          </div>

          <div className={styles.formControl}>
            <label htmlFor="Text">Text</label>
            <textarea type="Textarea" className={styles.inputArea} />
          </div>

          <div style={{display:"flex",justifyContent:"end", padding:"0px 30px"}}>
            <button className={styles.btn}>Submit</button>
          </div>
        </form>
      </div>
      <div className="content-img">
        <img src={containerImg} alt="" />
      </div>
    </div>
  );
}

export default ContactForm