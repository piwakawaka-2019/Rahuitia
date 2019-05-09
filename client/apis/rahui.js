import request from "superagent";

export function getRahui() {
  return request
    .get("/v1/rahui")
    .then(res => {
      const rahui = res.body;
      return rahui;
    })
    .catch(() => {
      throw Error("You need to implement an API route for /v1/rahui");
    });
}