import { useState } from 'react';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { add, getContactItems } from '../../redux/contactsSlice';

function ContactForm() {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  
  const contacts = useSelector(getContactItems);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

const hasContact =()=>{ contacts.find(
  el => el.name.toLowerCase() === name.toLowerCase()
)  ? alert(`${name} is already in contacts`)
  : dispatch(
      add({
        id: nanoid(),
        name,
        number,
      })
    );
}
  const handleSubmit = e => {
    e.preventDefault();
    hasContact()
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Number
        <input
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button className={s.button} type="submit">
        Add Contact
      </button>
    </form>
  );
}

export default ContactForm;
