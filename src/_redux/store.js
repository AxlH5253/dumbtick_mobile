import { createStore, combineReducers,applyMiddleware } from 'redux';
import promise from "redux-promise-middleware";
import thunk from 'redux-thunk';
import {getEvent} from '../_reducers/getEvent';
import {getEventDetail} from '../_reducers/getEvtDetail';
import {getCategoriesState} from '../_reducers/getCategories'
import {evtByCat} from '../_reducers/getEventByCategory'
import logger from "redux-logger";

const rootReducer = combineReducers(
    {
        getEvent,
        getEventDetail,
        getCategoriesState,
        evtByCat
    }
);

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk,logger,promise))
}

export default configureStore;