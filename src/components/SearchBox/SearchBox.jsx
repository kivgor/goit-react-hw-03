import css from './SearchBox.module.css'

const SearchBox = ({ inputName, handleChange }) => {

  return (
    <>
      <label>
        Find contact by name
        <input
          value={inputName}
          className={css.input}
          type="text"
          onChange={handleChange}
        />
      </label>
    </>
  );
};

export default SearchBox;
