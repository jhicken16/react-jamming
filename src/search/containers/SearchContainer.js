import React, {useState} from 'react';
import SearchBar from '../components/SearchBar'

function SearchContainer(){

    const [searchValue, setSearchValue] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchValue(e.target.value)
    }

    return (
        <div>
            <SearchBar handleSearch={handleSearch} searchValue={searchValue}/>
            <h1>{searchValue}</h1>
        </div>
        
    )
}
export default SearchContainer