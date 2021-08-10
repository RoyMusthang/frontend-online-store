export async function getCategories() {
  try {
    const pegarApi = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const json = await pegarApi.json();
    return json
  }
  catch (error) {
    console.log(error)
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const pegarApi = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
    const json = await pegarApi.json();
    return json;
  }
  catch (error) {
    console.log(error)
  }
}
