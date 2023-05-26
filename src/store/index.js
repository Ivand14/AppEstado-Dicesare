import { applyMiddleware, combineReducers, createStore } from "redux";

import categoriesReducer from "./reducers/category.reducer"
import categoryTrainingReducer from "./reducers/categoryTraining.reducer";
import thunk from "redux-thunk";

const rootReducer=combineReducers({
    categories:categoriesReducer,
    categoryTraining:categoryTrainingReducer
})

export default createStore(rootReducer,applyMiddleware(thunk))