import s from'./ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleted,
  getContactItems,
  getFilterValue,
} from '../../redux/contactsSlice';


const Contactlist = () => {

  const contacts = useSelector(getContactItems);
  const value = useSelector(getFilterValue);
  const dispatch = useDispatch();
  
  const getVisiblecontacts = () => {
    const normalizedFilter = value.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisiblecontacts();

  return (
    <ul className={s.list}>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          onDeleteContact={() => dispatch(deleted(id))}
        />
      ))}
    </ul>
  );
};

export default Contactlist;
