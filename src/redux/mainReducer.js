import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView26486Reducer from '../features/CalendarView26486/redux/reducers';
import EmailAuth36485Reducer from '../features/EmailAuth36485/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView26486: CalendarView26486Reducer,
EmailAuth36485: EmailAuth36485Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});