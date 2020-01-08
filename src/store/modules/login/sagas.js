import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { addToUser } from './actions';
import history from '../../../services/history';

function* requestAddToUser({ id }) {
  console.tron.log('entrou no saga');
  console.tron.log(id);
  toast.error('Produto fora do estoque');

  // const response = yield call(api.get, `/user/${id}`);
  // yield put(addToUser(id));
  history.push('/home');
}

export default all([takeLatest('REQUEST_ADD_TO_USER', requestAddToUser)]);
