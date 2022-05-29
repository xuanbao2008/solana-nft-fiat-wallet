export const getData = async (
    first_name, 
    last_name,
    username_token,
    email,
    passport_number,
    birth_date,
    address,
    city,
    country,
    postal_code,
    phone,
    gender,
    id_img_proof,
    passport_img_proof
  ) => {
  const data = await fetch('https://sandbox-api.marqeta.com/v3/users', {
    method: 'POST',
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic YjMyN2NiZjgtYzg2MS00MDc0LWFmNDMtZmYwNWZhYzNmMmRkOmE2ZTE2Mzg2LTQ3NjYtNDk5OS05NjRkLWVhMmMxYzMzZjAxZA=='
    },
    body: JSON.stringify({
      'first_name': first_name,
      'last_name': last_name,
      'token': username_token,
      'email': email,
      'identifications': [
          {
              'type': 'PASSPORT_NUMBER',
              'value': passport_number
          }
      ],
      'birth_date': birth_date,
      'address1': address,
      'city': city,
      'country': country,
      'postal_code': postal_code,
      'phone': phone,
      'gender': gender,
      'metadata': {
          'id_img_proof': id_img_proof,
          'passport_img_proof': passport_img_proof
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

  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const username_token = req.body.username_token;
  const email = req.body.email;
  const passport_number = req.body.passport_number;
  const birth_date = req.body.birth_date;
  const address = req.body.address;
  const city = req.body.city;
  const country = req.body.country;
  const postal_code = req.body.postal_code;
  const phone = req.body.phone;
  const gender = req.body.gender;
  const id_img_proof = req.body.id_img_proof;
  const passport_img_proof = req.body.passport_img_proof;
  console.log(first_name);
  console.log(last_name);
  console.log(username_token);

  // the rest of your code
  const data = await getData(
    first_name, 
    last_name,
    username_token,
    email,
    passport_number,
    birth_date,
    address,
    city,
    country,
    postal_code,
    phone,
    gender,
    id_img_proof,
    passport_img_proof
  );
  res.status(200).json(data);
}
