import {EVENT_BY_CATEGORY} from '../config/constant';

const initialState = {
    data:[],
    isLoading: false,
    isPost:false,
    error:false
};

export const evtByCat = (state = initialState,action)=>{
    switch (action.type){
        case `${EVENT_BY_CATEGORY}_PENDING`:
            return {
            ...state,
            isLoading: true,
        };
        case `${EVENT_BY_CATEGORY}_FULFILLED`:
            return {
            ...state,
            data: action.payload.data,
            isLoading: false,
        };
        case `${EVENT_BY_CATEGORY}_REJECTED`:
            return {
            ...state,
            error: true,
            isLoading: false
        };
        default:
            return state
    } 
};