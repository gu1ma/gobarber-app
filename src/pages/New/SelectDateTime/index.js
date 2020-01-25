import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';

import Background from '~/components/Background';
import DateInput from '~/components/DateInput';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import {Container, HourList, Hour, Title} from './styles';

export default function SelectDateTime({navigation}) {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);

  const provider = navigation.getParam('provider');

  useEffect(() => {
    async function loadAvaialable() {
      const {data} = await api.get(`providers/${provider.id}/available`, {
        params: {
          date: date.getTime(),
        },
      });

      setHours(data);
    }

    loadAvaialable();
  }, [date, provider.id]);

  function handleSelectorHour(time) {
    navigation.navigate('Confirm', {
      provider,
      time,
    });
  }

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
        <HourList
          data={hours}
          keyExtractor={item => String(item.time)}
          renderItem={({item}) => (
            <Hour
              onPress={() => handleSelectorHour(item.value)}
              enabled={item.available}>
              <Title>{item.time}</Title>
            </Hour>
          )}
        />
      </Container>
    </Background>
  );
}

SelectDateTime.navigationOptions = ({navigation}) => ({
  title: 'Selecione um horário',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
