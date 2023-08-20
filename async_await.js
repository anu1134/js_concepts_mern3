function fetchData() {
  return fetch("https://dummyjson.com/products/1");
}

async function getData() {
  try {
    const data = await fetchData();
    const products = await data.json();
    console.log("result", products);
  } catch {
    console.log("error in fetching data");
  }
}

getData();
