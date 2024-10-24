// rootreducer
import { combineReducers } from "redux";
import countReducer from "../Reducer/countReducer";

const rootreducers = combineReducers({
    counter:countReducer,
    
});
export default rootreducers;