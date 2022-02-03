const fetchProducts = async (product) => {
    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
    const result = await fetch(endpoint);
    const data = await result.json();
    return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
