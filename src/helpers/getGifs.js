import GIPHY_API from "../../config/apikey";

export const getGifs = async (category) => {

    const url = `${GIPHY_API}=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(image => ({
        id: image.id,
        title: image.title,
        url: image.images.downsized_medium.url
    }))

    // console.log(gifs);
    return gifs;
}