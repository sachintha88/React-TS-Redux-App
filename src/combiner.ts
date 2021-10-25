import { combineReducers } from "redux";
import "./Language/en.json";
import {languageReducer} from "./Language/languageReducer";

const rootReducer = combineReducers({
    //all reducers goes here
    language: languageReducer
});

export default rootReducer;