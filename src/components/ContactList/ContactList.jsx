import PropTypes from 'prop-types';
import s from'./ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';

const Contactlist = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          onDeleteContact={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  );
};
Contactlist.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  onDeleteContact: PropTypes.func,
};

export default Contactlist;
