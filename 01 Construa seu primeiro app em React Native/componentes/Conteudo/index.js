import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default function Perfil() {
  return (
    <View style={ styles.container }>
      <Text style={ styles.titulo }>Fabio Vicente</Text>
      <Text style={ styles.texto }>Estudando HTML, CSS, JavaScript e React Native</Text>
    </View>
  );
}
