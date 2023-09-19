import deconstructHash from "./helpers/deconstructHash"
const CLIENT_ID = 'dc3f7e473f06428a8e23cd37620f3283'

function authorize(){
    
    if (!window.location.hash){
        let url = 'https://accounts.spotify.com/authorize'
        url += '?response_type=token'
        url += '&client_id=' + encodeURIComponent(CLIENT_ID)
        url += '&redirect_uri=' + encodeURIComponent('http://localhost:3000/')
 
        window.location = url
    }
    const hashObj = deconstructHash(window.location.hash)
    
    //converts seconds to millieseconds
    hashObj.expires_in *= 1000
    
    console.log(hashObj)
    return hashObj

 }

export default authorize