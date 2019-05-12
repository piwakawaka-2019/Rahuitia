import request from "superagent";

export function getRahui() {
  console.log(' API client is working')
  return request
    .get("/api/rahui")
    .then(res => {
      const rahui = res.body;
      return rahui;
    })
    .catch(() => {
      throw Error("You need to implement an API route for /v1/rahui");
    });
}

export function writeRahui(rahui) {
  console.log(rahui)
    return request
    .post('/api/rahui')
    .send(rahui)
    .then(res => res.body)
    .catch(err => {
      throw err
    })
}

export function editRahui(rahui) {
  console.log(rahui)
    return request
    .post('/api/rahui')
    .send(rahui)
    .then(res => res.body)
    .catch(err => {
      throw err
    })
}