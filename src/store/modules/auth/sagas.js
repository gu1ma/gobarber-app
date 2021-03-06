import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';
import {signInSuccess, signFailure} from '~/store/modules/auth/actions';
import api from '~/services/api';

export function* signIn({payload}) {
  try {
    const {email, password} = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const {token, user} = response.data;

    if (user.provider) {
      Alert.alert(
        'Erro no login',
        'O usuário não pode ser prestador de serviços',
      );
    }

    yield put(signInSuccess(token, user));
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados',
    );
    yield put(signFailure());
  }
}

export function* signUp({payload}) {
  try {
    const {email, name, password} = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    Alert.alert('Sucesso', 'Conta criada com sucesso');
  } catch (err) {
    Alert.alert('Erro', 'Houve um erro ao efetuar o seu cadastro');

    yield put(signFailure());
  }
}

export function setToken({payload}) {
  if (!payload) {
    return;
  }

  const {token} = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
