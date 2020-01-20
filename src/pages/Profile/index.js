import React, {useRef, useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {updateProfileRequest} from '~/store/modules/user/actions';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';

import {
  Container,
  Separator,
  Title,
  Form,
  FormInput,
  SubmitButton,
} from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();
  const confirmNewPasswordRef = useRef();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  useEffect(() => {
    setOldPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
  }, [profile]);

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        newPassword,
        confirmNewPassword,
      }),
    );
  }

  return (
    <Background>
      <Container>
        <Title>Atualizar perfil</Title>
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next"
            value={name}
            onChangeText={setName}
            onSubmitEditing={() => emailRef.current.focus()}
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            value={email}
            onChangeText={setEmail}
            onSubmitEditing={() => oldPassword.current.focus()}
            ref={emailRef}
          />

          <Separator />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite a sua senha atual"
            returnKeyType="next"
            value={oldPassword}
            onChangeText={setOldPassword}
            onSubmitEditing={() => newPassword.current.focus()}
            ref={oldPasswordRef}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite a sua nova senha"
            returnKeyType="next"
            value={newPassword}
            onChangeText={setNewPassword}
            onSubmitEditing={() => confirmNewPasswordRef.current.focus()}
            ref={newPasswordRef}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirme a sua nova senha"
            returnKeyType="send"
            value={confirmNewPassword}
            onChangeText={setConfirmNewPassword}
            onSubmitEditing={handleSubmit}
            ref={confirmNewPasswordRef}
          />

          <SubmitButton onPress={handleSubmit}>Atualizar perfil</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({tintColor}) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
