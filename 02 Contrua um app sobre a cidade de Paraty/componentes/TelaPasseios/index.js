import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import styles from './styles';

import pa01 from '../../assets/passeios/passeio01.png';
import pa02 from '../../assets/passeios/passeio02.png';
import pa03 from '../../assets/passeios/passeio03.png';

export default function TelaRestaurantes(props){
  return(
    <View style={ styles.container }>
      <Text style={ styles.titulo2 }>
	Passeios em Paraty
      </Text>
      <Text style={ styles.texto }>
	O município de Paraty está quase inteiro em área de parques e de preservação ambiental. Muitas são as opções de passeios para quem curte a natureza: passeios de jeep, de bike, caminhadas por trilhas entre outros. Veja dois exemplos:
      </Text>
      <View style={ styles.boxImg }>
        <Text style={ styles.titulo3 }>Tirolesa</Text>
        <Image
	  source={ pa01 }
	  style={ styles.img }
        />
      </View>

      <View style={ styles.boxImg }>
        <Text style={ styles.titulo3 }>Rafting</Text>
        <Image
	  source={ pa02 }
	  style={ styles.img }
        />
      </View>

      <View style={ styles.boxImg }>
        <Text style={ styles.titulo3 }>Canoagem no mangue</Text>
        <Image
	  source={ pa03 }
	  style={ styles.img }
        />
      </View>

    </View>
  );
}
