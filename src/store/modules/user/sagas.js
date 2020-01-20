import {all, takeLatest, call, put} from 'redux-saga/effects';
import {Alert} from 'react-native';

import {
  updateProfileFailure,
  updateProfileSuccess,
} from '~/store/modules/user/actions';

import api from '~/services/api';

export function* updateProfile({payload}) {
  try {
    const {name, email, ...rest} = payload.data;

    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    yield put(updateProfileSuccess(response.data));

    Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
  } catch (error) {
    Alert.alert(
      'Erro',
      'Houve um problema ao atualizar perfil, confira seus dados!',
    );
    //yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
