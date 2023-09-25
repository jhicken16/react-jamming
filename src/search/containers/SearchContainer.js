import React, {useState} from 'react';
import SearchBar from '../components/SearchBar'
import results from '../../spotify/fetchSearchResualts';

function SearchContainer({authorization, spotifyListHandler}){

    const [searchValue, setSearchValue] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchValue(e.target.value)
    }
    const handleClick = async (search, authorization) => {
        try{
            const response =  await results(search, authorization)
            spotifyListHandler(response)
        }
        catch(err){
            console.log(err)
        }
    } 
    

    return (
        <div>
            <SearchBar handleSearch={handleSearch} searchValue={searchValue} authorization={authorization} handleClick={handleClick}/>
            <h1>{searchValue}</h1>
        </div>
        
    )
}
export default SearchContainer