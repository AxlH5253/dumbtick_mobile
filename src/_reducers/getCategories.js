import {GET_CATEGORIES} from '../config/constant';

const initialState = {
    data:[],
    isLoading: false,
    isPost:false,
    error:false
};

export const getCategoriesState = (state = initialState,action)=>{
    switch (action.type){
        case `${GET_CATEGORIES}_PENDING`:
            return {
            ...state,
            isLoading: true,
        };
        case `${GET_CATEGORIES}_FULFILLED`:
            return {
            ...state,
            data: action.payload.data,
            isLoading: false,
        };
        case `${GET_CATEGORIES}_REJECTED`:
            return {
            ...state,
            error: true,
            isLoading: false
        };
        default:
            return state
    } 
};