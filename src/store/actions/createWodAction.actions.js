export const ADD_WOD='ADD_WOD'
export const DELETE_WOD='DELETE_WOD'

export const addWod=item=>({
    type:ADD_WOD,
    item
})

export const deleteWod=itemId=>({
    type:DELETE_WOD,
    itemId
})