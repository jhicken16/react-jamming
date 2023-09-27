export default async function spotifyAddTracksToPlayList(playListObj, authorization, trackList){
    //https://api.spotify.com/v1/playlists/{playlist_id}/tracks

    let url = 'https://api.spotify.com/v1/playlists/'
    url += playListObj.id
    url += '/tracks'

    const uris = trackList.reduce((result, item) => {
                result.push(item.uri)
                return result
            }, [])
    
    const param = {
        method: 'POST',
        headers: {
            'Authorization': `${authorization.token_type} ${authorization.access_token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'uris': uris,
            'position': 0
            })
        
    }

    try{
        const response = await fetch(url, param)
        if (!response.ok){
            throw new Error('Response to add tracks not ok!')
        }
        else{
            const data = await response.json()
            console.log(data)
            return data
        }
    }
    catch(err){
        console.log(err)
    }
}