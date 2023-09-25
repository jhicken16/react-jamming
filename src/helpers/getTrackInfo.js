//Return an array of object, containing the relevant info from the spotify search api. relevant Info = Track : ID, Track : Name, Artist : Name, album : name.

export default function getTrackInfo(data){
    const trackList = data.tracks.items

    const arr = []

    let obj = {}

    for (let x = 0; x < trackList.length; x++){
        obj = {
            name : trackList[x].name,
            id : trackList[x].id,
            album : trackList[x].album.name, 
            artist : trackList[x].artists.map((artist) => {
                return artist.name
            }),
            uri : trackList[x].uri
        }
        arr.push(obj)
    }
    console.log(arr)
    return arr
}