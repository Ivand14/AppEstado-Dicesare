export const SIGNUP = 'SIGNUP';

import { Url_Auth } from '../../constant/database';

export const signup = (email, password) => {
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
