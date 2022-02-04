const fetchProducts = async (product) => {
   const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
   const searchData = await fetch(url);
   const data = await searchData.json();
   return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
