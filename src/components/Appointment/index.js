import React from 'react';

import {Container, Left, Avatar, Info, Name, Time} from './styles';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Appointment() {
  return (
    <Container>
      <Left>
        <Avatar
          source={{uri: 'https://api.adorable.io/avatar/50/rocketseat.png'}}
        />

        <Info>
          <Name>Gabriel Guimaraes</Name>
          <Time>em 3 horas</Time>
        </Info>
      </Left>

      <TouchableOpacity onPress={() => {}}>
        <Icon name="even-busy" size={20} color="#f64c75" />
      </TouchableOpacity>
    </Container>
  );
}
