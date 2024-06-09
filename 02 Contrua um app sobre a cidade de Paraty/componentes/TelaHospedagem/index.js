import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import styles from './styles';

import ho01 from '../../assets/hospedagens/hospedagem01.png';
import ho02 from '../../assets/hospedagens/hospedagem02.png';
import ho03 from '../../assets/hospedagens/hospedagem03.png';

export default function TelaRestaurantes(props){
  return(
    <View style={ styles.container }>
      <Text style={ styles.titulo2 }>
	Pousadas e Hotéis em Paraty
      </Text>
      <Text style={ styles.texto }>
	Paraty conta com excelentes hoteis e pousadas cujos preços podem variar de R$200,00 à R$1500,00. Veja algumas pousadas abaixo.
      </Text>

      <View style={ styles.boxImg }>
        <Image
	  source={ ho01 }
	  style={ styles.img }
        />
        <Text style={ styles.titulo3 }>Pousada Missanga</Text>
        <Text style={ styles.textoCaixa }>Valor médio: R$ 350,00</Text>
        <Text style={ styles.textoCaixa }>Localização: Próx. à Av. Roberto Silveira</Text>
      </View>

      <View style={ styles.boxImg }>
        <Image
	  source={ ho02 }
	  style={ styles.img }
        />
        <Text style={ styles.titulo3 }>Pousada Morro do Forte</Text>
        <Text style={ styles.textoCaixa }>Valor médio: R$ 450,00</Text>
        <Text style={ styles.textoCaixa }>Localização: Próximo à Praia - Pontal</Text>
      </View>

      <View style={ styles.boxImg }>
        <Image
	  source={ ho03 }
	  style={ styles.img }
        />
        <Text style={ styles.titulo3 }>Pousada Porto Imperial</Text>
        <Text style={ styles.textoCaixa }>Valor médio: R$ 550,00</Text>
        <Text style={ styles.textoCaixa }>Localização: Centro Histórico</Text>
      </View>

    </View>
  );
}
