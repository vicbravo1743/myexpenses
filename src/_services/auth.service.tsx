import { auth, firebase } from '../config/firebase';

export const authService = {
    loginWithEmailAndPassword,
    logout
}

async function loginWithEmailAndPassword(email: string, password: string){
    try {
        const userCredentials = await auth.signInWithEmailAndPassword(email, password);
        if(userCredentials.user) {
            return userCredentials
        } 
    } catch (error) {
        return error;
    }
}

async function logout() {
    try{
        await firebase.auth().signOut()
        return true;
    }catch(error) {
        return error;
    }
}
