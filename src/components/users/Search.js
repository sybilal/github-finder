import { useState } from 'react';
import PropTypes from 'prop-types';
export const Search = ({
  searchUser,
  searchUsers,
  showClear,
  clearUsers,
  setAlert,
}) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
    text !== '' && setAlert(null);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} action="" className="form">
        <input
          type="text"
          name="text"
          onChange={onChange}
          value={text}
          placeholder="Search Users..."
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>

      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
