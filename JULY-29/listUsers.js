//LIST USERS

const BASE_URL = "https://reqres.in";

const LIST = "/api/users";
async function listUsers(page){
  let req = await fetch(BASE_URL + LIST + "?page=" + page);
  
  let json = await req.json();
  
  console.log(json);
}
listUsers(2);