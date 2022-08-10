import PropTypes from 'prop-types';

const Filter = ({ value, onChahgeFilter }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onChahgeFilter} />
    </label>
  );
};
Filter.propTypes = {
  value: PropTypes.string,
  onChahgeFilter: PropTypes.func,
};
export default Filter;
