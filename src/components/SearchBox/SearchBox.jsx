import css from './SearchBox.module.css'

const SearchBox = ({ inputName, handleChange }) => {

  return (
    <div className={css.thumb}>
      <label>
        Find contact by name
        <input
          value={inputName}
          className={css.input}
          type="text"
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default SearchBox;
