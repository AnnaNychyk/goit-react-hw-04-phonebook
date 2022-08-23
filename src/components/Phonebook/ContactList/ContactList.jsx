import PropTypes from "prop-types";
import ContactListItem from "../ContactListItem/ContactListItem";

function ContactList({ list, onRemove }) {
  return (
    <ul>
      {list.map((list) => (
        <ContactListItem key={list.id} item={list} onRemove={onRemove} />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object.isRequired),
  onRemove: PropTypes.func.isRequired,
};

export default ContactList;
