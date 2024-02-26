function SearchBar() {
    return (
        <div>
            <input type="text" name="searchField" id="searchField" placeholder='Search' />
            <input type="text" name="searchLocation" id="searchLocation" placeholder='Location' />
            <select name="seachFilter" id="seachFilter">
                <option value="Best Match">Best Match</option>
                <option value="Highest Rated">Highest Rated</option>
                <option value="Most Reviewed">Most Reviewed</option>
            </select>
            <button name="searchButton" id="searchButton">Search</button>
        </div>
    )
}

export default SearchBar;