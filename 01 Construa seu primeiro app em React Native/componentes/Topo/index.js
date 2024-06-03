import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

import DevReactNative from '../../assets/DevMedia-ReactNative.png';
import DevJavaScript from '../../assets/DevMedia-JavaScript.png';

export default function Certificados() {
  return (
    <View style={ styles.container }>
      <Image
	source={ DevReactNative }
	style={ styles.box }
      />
      <Image
	source={ DevJavaScript }
	style={ styles.box }
      />
    </View>
  );
}

