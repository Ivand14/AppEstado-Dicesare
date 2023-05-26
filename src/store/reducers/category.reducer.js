import Categories from "../../data/Categories";
import { SELECTED_CATEGORIES } from "../actions/categories.actions";

const initialState={
    category:Categories,
    selected:null
}

const categoriesReducer=( state = initialState, action)=>{
    switch(action.type){
        case SELECTED_CATEGORIES:
            const IndexCategory=state.category.findIndex(
                cat => cat.id === action.categoriesId
            )
        return{...state,selected:state.category[IndexCategory]}
        default:
            return state
    }
}

export default categoriesReducer