import React, {useRef} from 'react';
import {Image} from 'react-native';

import logo from '~/assets/logo.png';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

import Background from '~/components/Background';

export default function SignUp({navigation}) {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit() {}

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            ref={emailRef}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite a sua senha"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            ref={passwordRef}
          />

          <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>

          <SignLink
            onPress={() => {
              navigation.navigate('SignIn');
            }}>
            <SignLinkText>Já tem conta? Efetue o login</SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
}
