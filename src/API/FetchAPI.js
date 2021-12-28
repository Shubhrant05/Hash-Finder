const FetchAPI = (hashtag) => {
    const data = fetch(`https://twitter-sa-api.herokuapp.com/?query=${hashtag}`).then((response) => response.json()).catch((error) => console.log(error))
    return data
}

export default FetchAPI
