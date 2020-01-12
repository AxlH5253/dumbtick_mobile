import { createStore, combineReducers,applyMiddleware } from 'redux';
import promise from "redux-promise-middleware";
import thunk from 'redux-thunk';
import {getEvent} from '../_reducers/getEvent';
import {getEventDetail} from '../_reducers/getEvtDetail';
import logger from "redux-logger";

const rootReducer = combineReducers(
    {
        getEvent,
        getEventDetail
    }
);

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk,logger,promise))
}

export default configureStore;