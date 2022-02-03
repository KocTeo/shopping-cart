const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Ao executar getSavedCartItems com argumento, o método localStorage.getItem' , () => {
    getSavedCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('Ao executar getSavedCartItems com argumento, o método localStorage.getItem é chamado com os parâmetros esperados', () => {
    getSavedCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  })
});
