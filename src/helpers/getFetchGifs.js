export const getFetchGifs = async (category) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?limit=7&q=${encodeURI(category)}&api_key=n1J096fYI33EKAhpV0O7SkGMHMzDoHCj`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized.url,
      };
    });

    return gifs;
    
  };