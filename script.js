function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  // remover o elemento clicado do carrinho
  event.target.remove();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

async function createListProduct() {
  // seleciona a section items
  const alocateItems = document.querySelector('.items');
  // executa a função assíncrona pra receber os dados da pesquisa
  const info = await fetchProducts('computador');
  // percorre todos os elementos do array results adicionando a section items
  await info.results.forEach(({ id, title, thumbnail }) => {
    alocateItems.appendChild(createProductItemElement({ sku: id, name: title, image: thumbnail }));
  });
}

async function addCartItems(event) {
  const item = await fetchItem(event.target.parentNode.firstChild.innerText);
  const { id, title, price } = item;
  const cartSection = document.querySelector('.cart__items');
  cartSection.appendChild(createCartItemElement({ sku: id, name: title, salePrice: price }));
}

window.onload = async () => {
  await createListProduct();
  // add o botão no onload pois antes ele não existe
  const buttonAdd = document.querySelectorAll('.item__add'); 
  // add o evento click a todos os botões
  buttonAdd.forEach((element) => element.addEventListener('click', addCartItems));
};
