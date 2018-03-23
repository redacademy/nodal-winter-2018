import { combineReducers } from "redux";

import competitiionReducer from "./modules/competition";
import matchScreenLoadingReducer from "./modules/matchScreenLoading";

const rootReducer = combineReducers({
  competition: competitiionReducer,
  matchScreenLoading: matchScreenLoadingReducer
});

export default rootReducer;
