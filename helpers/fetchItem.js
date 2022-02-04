const fetchItem = async (productId) => {
    const url = `https://api.mercadolibre.com/items/${productId}`;
    if (url.endsWith('undefined')) {
      throw new Error('You must provide an url');
    }
    const searchItem = await fetch(url);
    const data = await searchItem.json();
    return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
