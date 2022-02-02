require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('Verifica se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('Executa fetchProducts com argumento computador e verifica se fetch foi chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  
  it('Testa se o endpoint está correto', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('Verifica se chamada fetchProducts com o argumento computador retorna o esperado', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  });

  it('Verifica se chamada fetchProducts sem argumento retorna erro', async () => {
    try {
      await fetchProducts();
    } catch (error) {
      expect(error).toEqual('You must provide an url');
    }
  });
});
