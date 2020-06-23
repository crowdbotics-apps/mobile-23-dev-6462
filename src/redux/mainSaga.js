import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView16500Saga from '../features/CalendarView16500/redux/sagas';
import CalendarView16494Saga from '../features/CalendarView16494/redux/sagas';
import CalendarView26492Saga from '../features/CalendarView26492/redux/sagas';
import CalendarView26489Saga from '../features/CalendarView26489/redux/sagas';
import CalendarView26486Saga from '../features/CalendarView26486/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView16500Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}