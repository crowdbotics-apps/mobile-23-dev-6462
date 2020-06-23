import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth16490Reducer from '../features/EmailAuth16490/redux/reducers';
import CalendarView26489Reducer from '../features/CalendarView26489/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth16490: EmailAuth16490Reducer,
CalendarView26489: CalendarView26489Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});