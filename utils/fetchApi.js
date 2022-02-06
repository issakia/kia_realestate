import axios from "axios";

// headers: {
//   'x-rapidapi-host': 'bayut.p.rapidapi.com',
//   'x-rapidapi-key': 'b286271007msh74bcf92a9d87c43p1582d4jsn3a44ed3980a2'
// }


export const
// baseUrl= 'https://vincode1.p.rapidapi.com/decode_vin';
baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {

      // 'x-rapidapi-host': 'vincode1.p.rapidapi.com',
      // 'x-rapidapi-key': 'b286271007msh74bcf92a9d87c43p1582d4jsn3a44ed3980a2'

     'x-rapidapi-host': 'bayut.p.rapidapi.com',
     'x-rapidapi-key': 'b286271007msh74bcf92a9d87c43p1582d4jsn3a44ed3980a2'
     // 'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY ,
    },
  });
    
  return data;
}