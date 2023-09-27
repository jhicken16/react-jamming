import './search.css'

function SearchBar(props){
    console.log(props)
    return (
        <div className='searchContainer'>
            <form className='searchForm'>
              <label htmlFor="searchBar" className='title'>Search For Song</label>
              <input className='searchBar' id="searchBar" type="text" value={props.searchValue} onChange={props.handleSearch}/>
              <button className='button-77' type="submit" id="submit" onClick={() => props.handleClick(props.searchValue, props.authorization.access_token)}>submit</button>
            </form>
        </div>
      )
}
export default SearchBar