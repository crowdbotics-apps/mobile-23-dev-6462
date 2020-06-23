import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView16507Reducer from '../features/CalendarView16507/redux/reducers';
import CalendarView16501Reducer from '../features/CalendarView16501/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView16507: CalendarView16507Reducer,
CalendarView16501: CalendarView16501Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});