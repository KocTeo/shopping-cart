const fetchProducts = async (product) => {
   const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
   const info = await fetch(url);
   const data = await info.json();
   return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
