const fetchItem = async (productId) => {
  try {
    if (productId !== undefined) {
      const endpoint = `https://api.mercadolibre.com/items/${productId}`;
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
    fetchItem,
  };
}
