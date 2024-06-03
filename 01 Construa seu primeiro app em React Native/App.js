import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

import Topo from './componentes/Topo/';
import Conteudo from './componentes/Conteudo/';

export default function App(){
return (
  <View style={ styles.tela }>
    <Topo />
    <Conteudo />
  </View>
)};
