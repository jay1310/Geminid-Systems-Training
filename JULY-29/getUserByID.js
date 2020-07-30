// GET
const BASE_URL = "https://reqres.in";
const LIST = "/api/users";

async function getUser(id){
  let req = await fetch(BASE_URL + LIST + id);
  
  let json = await req.json();
  
  console.log(json);
}

getUser(7);