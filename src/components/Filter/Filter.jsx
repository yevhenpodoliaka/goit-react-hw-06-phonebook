import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contactsSlice';

const Filter = () => { 
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const onChahgeFilter = (e) => {
    dispatch(changeFilter(e.target.value)); 
  }
  return (
    <label>
      onChahgeFilter Find contacts by name
      <input type="text" value={value} onChange={onChahgeFilter} />
    </label>
  );
};

export default Filter;
