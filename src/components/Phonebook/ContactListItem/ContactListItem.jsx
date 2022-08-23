import PropTypes from "prop-types";
import styles from "./ContactListItem.module.css";

function ContactListItem({ item, onRemove }) {
  const { id, name, number } = item;
  return (
    <li key={id}>
      <span className={styles.name}>{name}</span>:{" "}
      <span className={styles.number}>{number}</span>
      <button className={styles.btn} type="button" onClick={() => onRemove(id)}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactListItem;
