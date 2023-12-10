import styles from './Checkbox.module.css';

const Checkbox = ({ label, value, onChange }) => {
    return (
      <div className={styles.checkboxWithLabel}>
        <label className={styles.label}>{label}</label>
        <input type="checkbox" checked={value} onChange={onChange} className={styles.checkbox}/>
      </div>
    );
};

 export default Checkbox;