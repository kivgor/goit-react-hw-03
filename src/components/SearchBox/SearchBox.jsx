import css from './SearchBox.module.css'

const SearchBox = ({ inputName, handleSearch }) => {
  return (
    <div className={css.thumb}>
      <label>
        Find contact by name
        <input
          value={inputName}
          className={css.input}
          type="text"
          onChange={handleSearch}
        />
      </label>
    </div>
  );
};

export default SearchBox;
