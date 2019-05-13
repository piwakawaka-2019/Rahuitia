import { combineReducers } from "redux";

import auth from "./auth";
import users from "./users";
import rahui from "./rahui"
import iwi from './iwi'
import area from './area'
import coords from './coords'
import toggle from './toggle'

export default combineReducers({
  auth,
  users,
  rahui,
  iwi,
  area,
  coords,
  toggle
});
