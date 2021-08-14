import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  newsListReducer,
  newsDetailsReducer,
  newsDeleteReducer,
  newsCreateReducer,
} from "./reducers/newsReducers";
import {
  partnerListReducer,
  partnerDetailsReducer,
  partnerDeleteReducer,
  partnerCreateReducer,
} from "./reducers/partnerReducers";
import {
  collaboratorListReducer,
  collaboratorDetailsReducer,
  collaboratorDeleteReducer,
  collaboratorCreateReducer,
} from "./reducers/collaboratorReducers";
import {
  heroListReducer,
  heroDetailsReducer,
  heroDeleteReducer,
  heroCreateReducer,
  heroUpdateReducer,
} from "./reducers/heroReducers";
import {
  teamListReducer,
  teamDetailsReducer,
  teamDeleteReducer,
  teamCreateReducer,
  teamUpdateReducer,
} from "./reducers/teamReducers";
import {
  superstarDonarListReducer,
  superstarDonarDetailsReducer,
  superstarDonarDeleteReducer,
  superstarDonarCreateReducer,
  superstarDonarUpdateReducer,
} from "./reducers/superstarDonarReducers";

import {
  articleListReducer,
  articleDetailsReducer,
  articleDeleteReducer,
  articleCreateReducer,
  articleUpdateReducer,
} from "./reducers/articleReducers";
import {
  testimonialListReducer,
  testimonialDetailsReducer,
  testimonialDeleteReducer,
  testimonialCreateReducer,
  testimonialUpdateReducer,
} from "./reducers/testimonialReducers";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
  newsList: newsListReducer,
  newsDetails: newsDetailsReducer,
  newsDelete: newsDeleteReducer,
  newsCreate: newsCreateReducer,
  partnerList: partnerListReducer,
  partnerDetails: partnerDetailsReducer,
  partnerDelete: partnerDeleteReducer,
  partnerCreate: partnerCreateReducer,
  collaboratorList: collaboratorListReducer,
  collaboratorDetails: collaboratorDetailsReducer,
  collaboratorDelete: collaboratorDeleteReducer,
  collaboratorCreate: collaboratorCreateReducer,
  heroList: heroListReducer,
  heroDetails: heroDetailsReducer,
  heroDelete: heroDeleteReducer,
  heroCreate: heroCreateReducer,
  heroUpdate: heroUpdateReducer,
  teamList: teamListReducer,
  teamDetails: teamDetailsReducer,
  teamDelete: teamDeleteReducer,
  teamCreate: teamCreateReducer,
  teamUpdate: teamUpdateReducer,
  superstarDonarList: superstarDonarListReducer,
  superstarDonarDetails: superstarDonarDetailsReducer,
  superstarDonarDelete: superstarDonarDeleteReducer,
  superstarDonarCreate: superstarDonarCreateReducer,
  superstarDonarUpdate: superstarDonarUpdateReducer,
  articleList: articleListReducer,
  articleDetails: articleDetailsReducer,
  articleDelete: articleDeleteReducer,
  articleCreate: articleCreateReducer,
  articleUpdate: articleUpdateReducer,
  testimonialList: testimonialListReducer,
  testimonialDetails: testimonialDetailsReducer,
  testimonialDelete: testimonialDeleteReducer,
  testimonialCreate: testimonialCreateReducer,
  testimonialUpdate: testimonialUpdateReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
