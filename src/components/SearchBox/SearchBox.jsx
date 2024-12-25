import css from './SearchBox.module.css'

const SearchBox = ({ inputName, handleChange }) => {

  return (
    <>
      <p>Find contact by name</p>
      <input
        value={inputName}
        className={css.input}
        type="text"
        onChange={handleChange}
      />
    </>
  );
};

export default SearchBox;
