import { combineReducers } from "redux";
import ArticlesReducer from "./articles/reducer";

const rootReducer = combineReducers({
    ArticlesReducer, 
    //Todos los reducer de cada cartpeta, y hay que importalos, para combinarlos todos.
})

export default rootReducer