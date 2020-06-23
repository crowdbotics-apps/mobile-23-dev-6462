import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth16490Saga from '../features/EmailAuth16490/redux/sagas';
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
EmailAuth16490Saga,
CalendarView26489Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}