import styles from './RadioButton.module.css';

const RadioButton = ({ label, value, onChange }) => {
    return (
      <div className={styles.radioButtonWithLabel}>
        <label className={styles.label}>{label}</label>
        <input type="radio" checked={value} onChange={onChange} className={styles.radioButton}/>
      </div>
    );
};

 export default RadioButton;