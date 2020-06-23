import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth16493Reducer from '../features/EmailAuth16493/redux/reducers';
import CalendarView26492Reducer from '../features/CalendarView26492/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth16493: EmailAuth16493Reducer,
CalendarView26492: CalendarView26492Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});