
import { combineReducers } from "redux";

import competitiionReducer from './modules/competition';

const rootReducer = combineReducers({
  
  competition: competitiionReducer
});

export default rootReducer;