const fetchProducts = async (product) => {
  try {
    if (product !== undefined) {
      const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
      const result = await fetch(endpoint);
      const data = await result.json();
      return data;
    }
  } catch (erro) {
    throw new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
