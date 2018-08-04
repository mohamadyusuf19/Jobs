import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL
} from './types';

// How to use AsyncStorage;
// AsyncStorage setItem('fb_token', token);
// AsyncStorage getItem('fb_token');

export const facebookLogin = () => async (dispatch) => {
    let token = await AsyncStorage.getItem('fb_token')
    if(token) {
        //Dispatch 
        dispatch({ 
            type: FACEBOOK_LOGIN_SUCCESS,
            payload: token
         })
    } else {
        //start fb Login Success
        doFacebookLogin(dispatch);
    }
};

const doFacebookLogin = async dispatch => {
    let { type, token  } = await Facebook.logInWithReadPermissionsAsync('2101870929836948', {
        permissions: ['public_profile']
    });

    if (type==='cancel') {
        return dispatch({ FACEBOOK_LOGIN_FAIL })
    }
    await AsyncStorage.setItem('fb_token', token);
    dispatch({  
        type: FACEBOOK_LOGIN_SUCCESS,
        payload: token
    })
}