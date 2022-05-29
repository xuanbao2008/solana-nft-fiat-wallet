export const getData = async (card_product_token, card_user_token) => {
  const data = await fetch('https://sandbox-api.marqeta.com/v3/cards?show_cvv_number=true&show_pan=true', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Basic YjMyN2NiZjgtYzg2MS00MDc0LWFmNDMtZmYwNWZhYzNmMmRkOmE2ZTE2Mzg2LTQ3NjYtNDk5OS05NjRkLWVhMmMxYzMzZjAxZA=='
    },
    body: JSON.stringify({
      'card_product_token': card_product_token,
      'user_token': card_user_token
    })
  });
  const response = await data.json();
  return response;
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }

  const card_product_token = req.body.card_product_token;
  const card_user_token = req.body.card_user_token;
  console.log(card_product_token);
  console.log(card_user_token);

  // the rest of your code
  const data = await getData(card_product_token, card_user_token);
  res.status(200).json(data);
}
