import axios from "axios"
import{
    DO_LOGIN,
    DO_LOGIN_OK,
    DO_LOGIN_FAIL,

    DO_LOGOUT,
    DO_LOGOUT_OK,
    DO_LOGOUT_FAIL,
} from "./actionTypes"


export function actionDoLogin(loginData){
    return {
        type: DO_LOGIN,
        payload: loginData
    }
}

export function actionDoLogout(){
    return{
        type: DO_LOGOUT
    }
}

export function actionDoLoginOk(userDetails){
    return{
        type: DO_LOGIN_OK,
        payload: userDetails
    }
}

export function actionDoLogoutOk(){
    return {
        type: DO_LOGOUT_OK,
    }
}

export function actionDoLoginFail(error){
    return{
        type: DO_LOGIN_FAIL,
        payload: error
    }
}

export function actionDoLogoutFail(error){
    return{
        type: DO_LOGOUT_FAIL,
        payload: error
    }
}

export function doLogin(userData){
    return async(dispatch)=>{
        try {
            dispatch(actionDoLogin(userData))
            // get para recibir
            // post para enviar
            const response = await axios.post("https://dummyjson.com/auth/login",userData)
            dispatch(actionDoLoginOk(response.data))
        } catch (error) {
            dispatch(actionDoLoginFail(error))
        }
      
    }
}

export function doLogout(){
    return (dispatch)=>{
        try{
            dispatch(actionDoLogout())
            dispatch(actionDoLogoutOk())
        }catch(error){
            dispatch(actionDoLogoutFail(error))
        }
    }
}





// // aqui voy a enviar datos recogidos contra la api a ver si son ciertos.
// // 15 min previos de la clase angular se vio autentificación. 

// //Añadir actualizacion de datos GET POST DELETE = CRUD.
// import axios from "axios";
// import {
//     GET_EVENTS,
//     GET_EVENTS_OK,
//     GET_EVENTS_FAIL,
// } from './actionTypes';

// //Aqui hay una reaccion'funcion' por cada acción
// export function actionGetEvents(){
//     return{
//         type: GET_EVENTS
//     }
// }

// export function actionGetEventsOk(events){
//     return{
//         type: GET_EVENTS_OK,
//         payload: events
//     }    
// }

// export function actionGetEventsFail(error){
//     return{
//         type: GET_EVENTS_FAIL,
//         payload: error,
//     }
// }

//     //Aqui petición a la Api
// export function getEvents(){
//     return async(dispatch)=>{
//         //empizo a pedir la info
//         dispatch(actionGetEvents())
//     //como es asyncrona tiene que tener un await, y hacemos un 'if else' con el try-catch.El data es el array de post que pedimos en la api, ya que si solo ponemos el response, nos dará muuucha info.
//         try{
//             const response = await axios.get("http://localhost:3000/events/loquesea")
//             dispatch(actionGetEventsOk(response.data))
//         }catch(error){
//             dispatch(actionGetEventsFail(error))
//         }
//     }
    
// };