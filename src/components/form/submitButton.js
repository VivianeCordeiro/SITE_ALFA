import styles from "./submitButton.module.css";
import { Link } from "react-router-dom";
const SubmitButton = ({ text }) => {
  return (
    <div className={styles.buttonContainer}>
      <button type="submit" className={styles.btn}>
        {text}
      </button>
    </div>
  );
};

export default SubmitButton;
