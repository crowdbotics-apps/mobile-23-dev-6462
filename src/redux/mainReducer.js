import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth26495Reducer from '../features/EmailAuth26495/redux/reducers';
import CalendarView16494Reducer from '../features/CalendarView16494/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth26495: EmailAuth26495Reducer,
CalendarView16494: CalendarView16494Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});