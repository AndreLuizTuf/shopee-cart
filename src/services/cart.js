// quais açoes meu carrinho pode fazer

//CASOS DE USO
// ✅ -> adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// ✅ -> calcular o total do carrinho
async function calculateTotal(userCart) {
    return userCart.reduce((total, item) => total + item.subtotal(), 0);
}

// -> deletar item do carrinho
async function deleteItem(userCart, name) {}

// -> ✅ remover um item - diminui um item
async function removeItem(userCart, idenx) {}


export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem
}


