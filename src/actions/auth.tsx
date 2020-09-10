import { authService } from '../_services';
import { types } from '../types/types';

export function startLogin( email: string, password: string ) {
    return async (dispatch: any) => {
        const userCredentials = await authService.loginWithEmailAndPassword(email, password);
        dispatch( login( userCredentials?.user?.email, userCredentials?.user?.uid) );
    }
}

export function login( email: string | undefined | null, uid: string | undefined | null ) {
    return (dispatch: any) => {
        dispatch({
            type: types.login,
            payload: {
                email,
                uid
            }
        })
    }
}

export function startLogout() {
    return async (dispatch: any) => {
        try {
            const signOut = await authService.logout();
            if(signOut){
                dispatch( logout() )
            }
        } catch (error) {
            throw error;
        }
    }
}

export function logout() {
    return (dispatch: any) => {
        dispatch({
            type: types.logout
        })
    }
}