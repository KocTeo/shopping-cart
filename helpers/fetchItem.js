const fetchItem = async (productId) => {
    const endpoint = `https://api.mercadolibre.com/items/${productId}`;
    const result = await fetch(endpoint);
    const data = await result.json();
    return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
