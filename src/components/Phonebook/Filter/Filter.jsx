import PropTypes from "prop-types";
import styles from "./Filter.module.css";

function Filter({ value, onChange }) {
  return (
    <label className={styles.label}>
      Find contact by name
      <input
        className={styles.input}
        name="filter"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
