import {GET_EVENT_TODAY,GET_EVENT_UPCOMING} from '../config/constant';

const initialState = {
    data:[],
    isLoading: false,
    isPost:false,
    error:false
};

export const getEvent = (state = initialState,action)=>{
    switch (action.type){     
        case `${GET_EVENT_TODAY}_PENDING`:
            return {
            ...state,
            isLoading: true,
        };
        case `${GET_EVENT_TODAY}_FULFILLED`:
            return {
            ...state,
            data: action.payload.data,
            isLoading: false,
        };
        case `${GET_EVENT_TODAY}_REJECTED`:
            return {
            ...state,
            error: true,
            isLoading: false
        };
        case `${GET_EVENT_UPCOMING}_PENDING`:
            return {
            ...state,
            isLoading: true,
        };
        case `${GET_EVENT_UPCOMING}_FULFILLED`:
            return {
            ...state,
            data: action.payload.data,
            isLoading: false,
        };
        case `${GET_EVENT_UPCOMING}_REJECTED`:
            return {
            ...state,
            error: true,
            isLoading: false
        };
        default:
            return state
    } 
};