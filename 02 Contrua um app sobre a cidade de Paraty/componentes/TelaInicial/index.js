import React from 'react';
import {View, Text, Button, Image, Pressable} from 'react-native';

import paraty from '../../assets/01.png';
import styles from './styles';

export default function TelaInicial(props){
  return(
    <View style={ styles.container }>
    <View style={ styles.conteudo }>
      <Text style={ styles.titulo }>
        Paraty
      </Text>
      <Text style={ styles.texto }>
        Saiba o que visitarbem Paraty.
      </Text>
      <Image
	source={ paraty }
	style={ styles.imgCapa }
      />

      <Pressable style={ styles.botao }
        onPress ={ () => { props.navigation.navigate('Restaurantes')}}>
	  <Text style={ styles.textoBotao }>VER RESTAURANTES</Text>
      </Pressable>

      <Pressable style={ styles.botao }
        onPress ={ () => { props.navigation.navigate('Passeios')}}>
	  <Text style={ styles.textoBotao }>VER PASSEIOS</Text>
      </Pressable>

      <Pressable style={ styles.botao }
        onPress ={ () => { props.navigation.navigate('Hospedagem')}}>
	  <Text style={ styles.textoBotao }>VER HOSPEDAGEM</Text>
      </Pressable>
    </View>
    </View>
  );
}
