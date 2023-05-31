import { ADD_WOD, DELETE_WOD } from "../actions/createWodAction.actions";

const initialState={
    itemSelected:[]
}

const createWodReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_WOD:
            const findIndex=state.itemSelected.findIndex(
                itemSelec=>itemSelec.id===action.item
            )
            if(findIndex === -1){
                const updateIndex=[...state.itemSelected,action.item]
                return {...state,itemSelected:updateIndex}
            }
            return {...state,itemSelected:findIndex}

        
        case DELETE_WOD:
            const deleteItem=[...state.itemSelected].filter(
                items=>items.id !== action.itemId
            )
            return {...state,itemSelected:deleteItem}

        default:
            return state
    }
}

export default createWodReducer