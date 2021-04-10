export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}i&limit=1000&api_key=xD7jJo2ysuUIkbNqBnOLMxzUMU8hRNjP`;

    const resp = await  fetch( url );

    const { data } = await resp.json();

    const gifs = data.map(img => {
      return {  
            id: img.id,
            url: img.images?.downsized_medium.url,
            title: img.title
        }
    }); 

    return gifs;
}
