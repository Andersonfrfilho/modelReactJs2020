import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';

import { addToUser, addToUsers } from './actions';
import history from '../../../services/history';
import { loading, successAction, failureAction } from '../common/actions';
import { UserException, errorVerify } from '../../../config/Exceptions';

function* requestAddToUser({ payload }) {
  const { user, users } = payload;
  yield put(loading());
  try {
    const { data: receiveUser } = yield call(
      api.get,
      `/users/${user.toLowerCase()}`
    );

    if (users.length > 0) {
      const newUser = users.find(element => element.id === receiveUser.id);
      if (newUser === undefined) {
        yield put(addToUser(receiveUser));
        toast.success('Usuario adicionado');
        yield put(successAction(''));
      } else {
        throw new UserException('errorNovo');
      }
    } else {
      yield put(addToUser(receiveUser));
      toast.success('Usuario adicionado');
      yield put(successAction(''));
    }
  } catch (error) {
    const menssage = errorVerify(error);
    toast.error(menssage);
    yield put(failureAction(menssage));
  }
}
function* requestUserLocal() {
  yield put(loading());

  try {
    const data = yield localStorage.getItem('Modelo@users');
    if (data !== null) {
      yield put(addToUsers(data));
      yield put(successAction(''));
    } else {
      yield put(successAction(''));
    }
  } catch (error) {
    const menssage = errorVerify(error.message);
    toast.error(menssage);
    yield put(failureAction(menssage));
  }
}
function* requestAddUserLocal({ payload }) {
  yield put(loading());
  try {
    const { users } = payload;
    localStorage.setItem('Modelo@users', JSON.stringify(users));
    yield put(successAction(''));
  } catch (error) {
    const menssage = errorVerify(error.message);
    toast.error(menssage);
    yield put(failureAction(menssage));
  }
}
export default all([
  takeLatest('@login/REQUEST_ADD_TO_USER', requestAddToUser),
  takeLatest('@login/REQUEST_USERS_LOCAL', requestUserLocal),
  takeLatest('@login/ADD_TO_USERS_LOCAL', requestAddUserLocal),
]);
