import { useSelector, useDispatch } from 'react-redux';
import { changeFilter,getFilterValue } from '../../redux/contactsSlice';

const Filter = () => { 
  const value = useSelector(getFilterValue);
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
