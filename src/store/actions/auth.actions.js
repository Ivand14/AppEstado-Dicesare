export const SIGNUP = 'SIGNUP';
export const SINGIN = 'SINGIN';

import { Url_Auth } from '../../constant/database';
import {Url_SignIn} from '../../constant/database';

export const signin=(email,password)=>{
    return async dispatch => {
        try {
            const response = await fetch(Url_SignIn,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    email,
                    password
                })
            })
            const data=await response.json()
            console.log(data)
            dispatch({
                type:SINGIN,
                payload:data    
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const signup = (email, password,userName) => {
    return async dispatch => {
        try {
            const response = await fetch(Url_Auth, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                    userName,
                    returnSecureToken: true,
                }),
            });
            const data = await response.json();
            console.log(data);
            dispatch({
                type: SIGNUP,
                token: data.idToken,
                userId:data.localId
            });
        } catch (error) {
            console.log(error);
        }
    };
};
