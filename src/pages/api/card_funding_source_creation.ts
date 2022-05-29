export const getData = async (funding_program_name) => {
  const data = await fetch('https://sandbox-api.marqeta.com/v3/fundingsources/program', {
    method: 'POST',
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic YjMyN2NiZjgtYzg2MS00MDc0LWFmNDMtZmYwNWZhYzNmMmRkOmE2ZTE2Mzg2LTQ3NjYtNDk5OS05NjRkLWVhMmMxYzMzZjAxZA=='
    },
    body: JSON.stringify({
        'name': funding_program_name
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

  const funding_program_name = req.body.funding_program_name;
  console.log(funding_program_name);

  // the rest of your code
  const data = await getData(funding_program_name);
  res.status(200).json(data);
}
