import {GET_EVENT_TODAY,GET_EVENT_UPCOMING,GET_EVENT_DETAIL,GET_CATEGORIES,EVENT_BY_CATEGORY} from '../config/constant'
import axios from 'axios';

export const getCategories =() =>{
    return{
        type: GET_CATEGORIES, 
        payload: axios(
            {
                method:'GET',
                url:'https://dumb-tick-app.herokuapp.com/api/v1/categories',
        })
    };
};

export const eventByCategory = id =>{
    return{
        type: EVENT_BY_CATEGORY, 
        payload: axios(
            {
                method:'GET',
                url:`https://dumb-tick-app.herokuapp.com/api/v1/category/${id}/events`,
        })
    };
};

export const getEvenToday =() =>{
    return{
        type: GET_EVENT_TODAY, 
        payload: axios(
            {
                method:'GET',
                url:'https://dumb-tick-app.herokuapp.com/api/v1/events?start_time=2020-01-12',
        })
    };
};

export const getEvenUp =() =>{
    return{
        type: GET_EVENT_UPCOMING, 
        payload: axios(
            {
                method:'GET',
                url:'https://dumb-tick-app.herokuapp.com/api/v1/events?start_time_gte=2020-01-12',
        })
    };
};

export const getDetailEvt = id =>{
    return{
        type: GET_EVENT_DETAIL, 
        payload: axios(
            {
                method:'GET',
                url:`https://dumb-tick-app.herokuapp.com/api/v1/event/${id}`,
        })
    };
};