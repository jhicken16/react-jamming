export default async function fetchSpotifyUserName(authorization){
    
    const url = 'https://api.spotify.com/v1/me'

    console.log(authorization)
    const param = {
        headers: {
        'Authorization': `${authorization.token_type} ${authorization.access_token}`  
        }
    }
    
    try{
        const response = await fetch(url, param)
        if (response.ok){
           const data = response.json()
           return data
        }
        else{
            console.log('response not ok.')
        }
        
    }
    catch(err){
        console.log(err)
    }
}