import request from "superagent";
import { get } from "../utils/localstorage";
import { isAuthenticated } from "../utils/auth";

export function getAttendees() {
  const token = get("token");
  const headers = {
    Accept: "application/json"
  };

  if (isAuthenticated()) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return request
    .get("/api/meetings/:id/users")
    .set(headers)
    .then(res => res.body)
    .catch(err => {
      throw err;
    });
}

export function getUsers() {
  const token = get("token");
  const headers = {
    Accept: "application/json"
  };

  if (isAuthenticated()) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return request
    .get("/api/users")
    .set(headers)
    .then(res => res.body)
    .catch(err => {
      throw err;
    });
}
