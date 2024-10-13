export const getGifs = async (category) => {
    const apiKey = 'BXVGJ32gKZxqeeWz6TlGWt4MhK3yCQKT';
    let url = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=${apiKey}&limit=6`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    // console.log(data);
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs;
    // console.log(gifs);
}