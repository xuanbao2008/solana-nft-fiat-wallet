export const getData = async (
  card_product_token,
  card_product_name,
  first_name, 
  last_name,
  address,
  city,
  postal_code,
  country
) => {
const data = await fetch('https://sandbox-api.marqeta.com/v3/cardproducts', {
  method: 'POST',
  headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Basic YjMyN2NiZjgtYzg2MS00MDc0LWFmNDMtZmYwNWZhYzNmMmRkOmE2ZTE2Mzg2LTQ3NjYtNDk5OS05NjRkLWVhMmMxYzMzZjAxZA=='
  },
  body: JSON.stringify({
      'token': card_product_token,
      'name': card_product_name,
      'start_date': '2022-05-29',
      'config': {
          'card_life_cycle': {
              'activate_upon_issue': true
          },
          'fulfillment': {
              'shipping': {
                  'recipient_address': {
                      'first_name': first_name,
                      'last_name': last_name,
                      'address1': address,
                      'city': city,
                      'state': '',
                      'postal_code': postal_code,
                      'country': country
                  }
              }
          }
      }
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
  const card_product_name = req.body.card_product_name;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const address = req.body.address;
  const city = req.body.city;
  const country = req.body.country;
  const postal_code = req.body.postal_code;
  console.log(card_product_token);

  // the rest of your code
  const data = await getData(
    card_product_token,
    card_product_name,
    first_name, 
    last_name,
    address,
    city,
    postal_code,
    country
  );
  res.status(200).json(data);
}
