import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID xdTM3iJtWgWmXArzErf1djjzSxFqYGxDEn0HCS1Zpr8'
        },
        params: {
            query: term
        },
    })

    return response.data.results;
};

export default searchImages;