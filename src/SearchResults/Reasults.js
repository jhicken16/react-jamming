import getTrackInfo from "../helpers/getTrackInfo"

export default async function results(infoToPass, hash){
    
    console.log(hash)

    let url = 'https://api.spotify.com/v1/search?q='
    url += infoToPass
    url += '&type=track'

    try{
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'content-Type': 'application/json',
                'Authorization': 'Bearer ' + hash
            }
        })
        console.log(response)
        if (!response.ok){
            throw new Error('Network connection was not ok.')
        }

        const data = await response.json()
        console.log(data)
        //map the data you need to and return that should do it in a function to make  modular
        return getTrackInfo(data)
    }
    catch(err){
        console.log(err)
    }
}