function SearchBar(props){
    console.log(props)
    return (
        <div>
          <label htmlFor="searchBar">Search:</label>
            <input id="searchBar" type="text" value={props.searchValue} onChange={props.handleSearch}/>
            <button type="submit" id="submit" onClick={() => props.handleClick(props.searchValue, props.authorization.access_token)}>submit</button>
        </div>
      )
}
export default SearchBar