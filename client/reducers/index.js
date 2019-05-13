import { combineReducers } from "redux";

import auth from "./auth";
import users from "./users";
import rahui from "./rahui"
import iwi from './iwi'
import area from './area'
import coords from './coords'
<<<<<<< HEAD
import toggle from './toggle'
||||||| merged common ancestors
=======
import tautoko from './tautoko'
>>>>>>> f0600b94590db387ebe5bee23b193eda5bb249f5

export default combineReducers({
  auth,
  users,
  rahui,
  iwi,
  area,
<<<<<<< HEAD
  coords,
  toggle
||||||| merged common ancestors
  coords
=======
  coords,
  tautoko
>>>>>>> f0600b94590db387ebe5bee23b193eda5bb249f5
});
