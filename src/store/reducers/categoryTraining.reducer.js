import { FILTERED_CATEGORYTRAINING, SELECTED_CATEGORYTRAINING } from "../actions/categoryTraining.actions";

import CategoryTraining from "../../data/CategoryTraining";

const initialState={
    categoryTraining:CategoryTraining,
    categoryFilter:[],
    selected:null
}

const categoryTrainingReducer=(state=initialState,action)=>{
    switch(action.type){
        case SELECTED_CATEGORYTRAINING:
            return{
                ...state,selected:state.categoryTraining.find(
                    category=>category.id === action.trainingId
                )
            }
        
        case FILTERED_CATEGORYTRAINING:
            return{
                ...state,categoryFilter:state.categoryTraining.filter(
                    catFilter=>catFilter.Category === action.categoryId
                )
            }  

        default:
            return state

        
    }
}

export default categoryTrainingReducer