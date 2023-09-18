function SearchBar(props){
    console.log(props)
    return (
        <div>
          <label htmlFor="searchBar">Search:</label>
            <input id="searchBar" type="text" value={props.SearchValue} onChange={props.handleSearch}/>
            <button type="submit" id="submit">submit</button>
        </div>
      )
}
export default SearchBar