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

export default function SignIn({navigation}) {
  const passwordRef = useRef();

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite a sua senha"
            ref={passwordRef}
            returnKeyType="send"
          />

          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>

          <SignLink
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <SignLinkText>Criar conta gratuitamente</SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
}
