
import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import styles from './styles';

import re01 from '../../assets/restaurantes/restaurante01.png';
import re02 from '../../assets/restaurantes/restaurante02.png';
import re03 from '../../assets/restaurantes/restaurante03.png';

export default function TelaRestaurantes(props){
  return(
    <View style={ styles.container }>
      <Text style={ styles.titulo2 }>
        Bares e Restaurantes
      </Text>
      <Text style={ styles.texto }>
	O prazer da boa comida você encontra em Paraty. Com inúmeras opções de restaurantes, a cidade oferece o melhor da culinária internacional, juntamente à saborosa cozinha caiçara. Confira alguns bares e restaurantes famosos.
      </Text>

      <View style={ styles.boxImg }>
        <Image
	  source={ re01 }
	  style={ styles.img }
        />
        <Text style={ styles.titulo3 }>Armazém Mar</Text>
        <Text style={ styles.textoCaixa }>Localização: Rod Rio-Santos</Text>
      </View>

      <View style={ styles.boxImg }>
        <Image
	  source={ re02 }
	  style={ styles.img }
        />
        <Text style={ styles.titulo3 }>Bendita's Restaurante</Text>
        <Text style={ styles.textoCaixa }>Localização: Centro Histórico</Text>
      </View>

      <View style={ styles.boxImg }>
        <Image
	  source={ re03 }
	  style={ styles.img }
        />
        <Text style={ styles.titulo3 }>SEREIA DO MAR PIZZA-BAR</Text>
        <Text style={ styles.textoCaixa }>Localização: Praia do Jabaquara</Text>
      </View>

    </View>
  );
}
