import { combineReducers } from "redux";

import authReducer from "./auth.reducer";
import errorReducer from "./error.reducer";
import postsReducer from "./posts.reducer";
import userReducer from "./user.reducer";

export default combineReducers({
  authReducer,
  errorReducer,
  postsReducer,
  userReducer,
});
