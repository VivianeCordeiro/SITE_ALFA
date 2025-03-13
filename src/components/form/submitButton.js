import styles from "./submitButton.module.css";

const SubmitButton = ({ text, onClick }) => {
  return (
    <div className={styles.buttonContainer}>
      <button type="submit" className={styles.btn} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default SubmitButton;
