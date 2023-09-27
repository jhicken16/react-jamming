import React, {useState} from 'react';
import SearchBar from './SearchBar'
import results from '../spotify/fetchSearchResualts';
import '../conformStyles/inputFeild.css'
import '../conformStyles/button.css'
import '../conformStyles/title.css'

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
        <SearchBar handleSearch={handleSearch} searchValue={searchValue} authorization={authorization} handleClick={handleClick}/>
    )
}
export default SearchContainer