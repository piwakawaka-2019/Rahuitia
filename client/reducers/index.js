import { combineReducers } from "redux";

import auth from "./auth";
import users from "./users";
import rahui from "./rahui"

export default combineReducers({
  auth,
  users,
  rahui
});
