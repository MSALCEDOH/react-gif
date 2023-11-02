export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=4v3J0JsmA3CUS7vhhqu7W0pku9EOxrdR&q=${ category }&limit=10`
    
    const resp = await fetch(url)
    const {data} = await resp.json()
    const gifs = data.map (img=>({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))
    console.log(url)
    return gifs
  }
