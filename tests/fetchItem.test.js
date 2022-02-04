require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('Teste se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });

  it('Verifica se o fetch foi chamado', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  it('Verifica se o endpoint chamadop é o correto', async () => {
    await fetchItem('MLB1615760527');
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('Verifica se o retorno da função é o esperado', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  });

  it('Verifica se a função sem parametro retorna erro', async () => {
    try {
    expect(await fetchItem()).toBe('You must provide an url');
    } catch (error) {
      console.log(error);
    }
  })
});
