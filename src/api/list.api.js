export async function getList() {
  try {
    const fetchResponse = await fetch('https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/list');
    const jsonResponse = await fetchResponse.json();

    return {
      error: null,
      response: jsonResponse.products,
    };
  } catch (error) {
    return {
      error,
      response: null,
    };
  }
}
