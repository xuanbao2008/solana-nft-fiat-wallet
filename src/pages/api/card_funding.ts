export const getData = async (username_token, amount, funding_source_token) => {
  const data = await fetch('https://sandbox-api.marqeta.com/v3/gpaorders', {
    method: 'POST',
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic YjMyN2NiZjgtYzg2MS00MDc0LWFmNDMtZmYwNWZhYzNmMmRkOmE2ZTE2Mzg2LTQ3NjYtNDk5OS05NjRkLWVhMmMxYzMzZjAxZA=='
    },
    body: JSON.stringify({
        'user_token': username_token,
        'amount': amount,
        'currency_code': 'usd',
        'funding_source_token': funding_source_token
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

  const username_token = req.body.username_token;
  const amount = req.body.amount;
  const funding_source_token = req.body.funding_source_token;
  console.log(username_token);
  console.log(amount);
  console.log(funding_source_token);

  // the rest of your code
  const data = await getData(username_token, amount, funding_source_token);
  res.status(200).json(data);
}
