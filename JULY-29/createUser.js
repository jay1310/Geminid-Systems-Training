// POST

const BASE_URL = "https://reqres.in/";

const LIST = "api/users";

async function createUser(name, job){
  let req = await fetch(BASE_URL + LIST, {
    method: "POST",
    body:{
        name: name,
        job :job
        }
    });
  
  return req;

}
let create = createUser("Jay", "Great");
console.log(create);