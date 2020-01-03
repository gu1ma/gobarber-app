import React from 'react';
import {View, Text} from 'react-native';

// import { Container } from './styles';

import Background from '~/components/Background';
import Input from '~/components/Input';
import Button from '~/components/Button';

export default function SignIn() {
  return (
    <Background>
      <Text>Oloko meu</Text>

      <Input
        style={{marginTop: 30}}
        icon="call"
        placeholder="Digite o seu nome"
      />

      <Button>Entrar</Button>
    </Background>
  );
}
