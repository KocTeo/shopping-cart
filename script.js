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
  event.target.remove();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

async function addProductsList() {
  const itemSection = document.querySelector('.items');
  const infoProdutc = await fetchProducts('computador');
  const result = infoProdutc.results.map((product) => 
  [product.id, product.title, product.thumbnail]);
  result.forEach((dataProduct) => { 
    const item = createProductItemElement({ 
      sku: dataProduct[0],
      name: dataProduct[1], 
      image: dataProduct[2],
    });
    itemSection.appendChild(item);
  });
}

async function addProductsCart(event) {
  const cartSection = document.querySelector('.cart__items');
  const productId = getSkuFromProductItem(event.target.parentNode);
  const itemData = await fetchItem(productId);
  const itemCart = {
    sku: itemData.id,
    name: itemData.title,
    salePrice: itemData.price,
  };
  cartSection.appendChild(createCartItemElement(itemCart));
}

window.onload = async () => { 
   await addProductsList();

   const addCartButton = document.querySelectorAll('.item__add');
   addCartButton.forEach((button) => button.addEventListener('click', addProductsCart));
};