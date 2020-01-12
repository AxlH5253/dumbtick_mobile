import {GET_EVENT_TODAY,GET_EVENT_UPCOMING,GET_EVENT_DETAIL} from '../config/constant'
import axios from 'axios';

export const getEvenToday =() =>{
    return{
        type: GET_EVENT_TODAY, 
        payload: axios(
            {
                method:'GET',
                url:'http://192.168.1.15:5000/api/v1/events?start_time=2020-01-04',
        })
    };
};

export const getEvenUp =() =>{
    return{
        type: GET_EVENT_UPCOMING, 
        payload: axios(
            {
                method:'GET',
                url:'http://192.168.1.15:5000/api/v1/events?start_time_gte=2020-01-04',
        })
    };
};

export const getDetailEvt = id =>{
    return{
        type: GET_EVENT_DETAIL, 
        payload: axios(
            {
                method:'GET',
                url:`http://192.168.1.15:5000/api/v1/event/${id}`,
        })
    };
};