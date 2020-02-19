import {put, takeLatest, all} from 'redux-saga/effects';

function* actionWatcher() {
  // yield takeLatest('CITIES_RECEIVED', fetchCities);
}

// function* actionWatcher() {
//   yield throttle(200, "CITIES_RECEIVED", fetchCities);
// }

export default function* rootSaga() {
  yield all([]);
}
