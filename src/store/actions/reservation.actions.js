import { Url_Api } from "../../constant/database"

export const CANCEL_RESERVATION='CANCEL_RESERVATION'
export const ADD_RESERVATION='ADD_RESERVATION'

export const addReservation=(user)=>{
    return async dispatch=>{
        try {
            const response = await fetch(`${Url_Api}/Reservation.json`,{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    date: date.now(),
                    userName:{...user}
                })
            })
            const data = await response.json()
            dispatch({
                type: ADD_RESERVATION,
                confirm:true
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const cancelReservation=(userId)=>{
    return async dispatch=>{
        try {
            const response = await fetch(`{Url_Api}/Reservation/${userId}.json`,{
            method:"DELETE",
            })
            const data=await response.json()
            dispatch({
                type:CANCEL_RESERVATION,
                userId
            })
        } catch (error) {
            console.log(error)
        }
    }
}