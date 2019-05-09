import request from "superagent";

export function getIwi() {
  return request
    .get("/v1/iwi")
    .then(res => {
      const iwi = res.body;
      return iwi;
    })
    .catch(() => {
      throw Error("You need to implement an API route for /v1/iwi");
    });
}

