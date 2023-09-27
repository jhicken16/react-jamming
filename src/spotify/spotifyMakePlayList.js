export default async function spotifyMakePlayList(authorization, playListName){
    
    

    let url = 'https://api.spotify.com/v1/users/'
    url += authorization.username.id
    url += '/playlists'

    console.log(url)

    const param = {
        method: 'POST',
        headers: {
            'Authorization': `${authorization.token_type} ${authorization.access_token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': playListName
        })
    }

    

    try{
        const response = await fetch(url, param)
        if (!response.ok){
            throw new Error("Response not ok!")
        }
        else{
            const playlist = await response.json()
            console.log(playlist)
            return playlist
        }
    }
    catch(err){
        console.log(err)
    }
}
