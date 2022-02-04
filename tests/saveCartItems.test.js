const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  it('Verifica se localStorage.setItem é chamado', () => {
    const cart = '<ol><li>Item</li></ol>';
    saveCartItems(cart);
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('Verifica se localStorage.setItem é chamado com argumentos esperados', () => {
    const cart = '<ol><li>Item</li></ol>';
    saveCartItems(cart);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', cart);
  });
});
