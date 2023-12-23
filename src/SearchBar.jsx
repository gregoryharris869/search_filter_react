import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const SearchBar = ({ posts, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const resultsArray = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.body.toLowerCase().includes(searchTerm)
    );

    setSearchResults(resultsArray);
  };
  return (
    <header>
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="search__input"
          type="text"
          id="search"
          aria-label="Search"
          onChange={handleSearchChange}
        />
        <button className="search__button">
          <FontAwesomeIcon
            icon={faSearch}
            type="submit"
            aria-label="Submit Search"
          />
        </button>
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  posts: PropTypes.array.isRequired,
  setSearchResults: PropTypes.func.isRequired,
};

export default SearchBar;
