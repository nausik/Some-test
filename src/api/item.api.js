export async function getItem(id) {
  try {
    const fetchResponse = await fetch(`https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/${id}/detail`);
    const jsonResponse = await fetchResponse.json();

    return {
      error: null,
      response: jsonResponse,
    };
  } catch (error) {
    return {
      error: true,
      response: null,
    };
  }
}
