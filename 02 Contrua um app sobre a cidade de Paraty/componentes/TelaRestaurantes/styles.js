import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fecda5',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  titulo2: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  titulo3: {
    fontWeight: 'bold',
    fontSize: 13,
    marginTop: 5,
  },
  texto: {
    fontSize: 10,
    textAlign: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  textoCaixa: {
    fontSize: 10,
  },
  img: {
    width: 270,
    height: 70,
  },
  boxImg: {
    backgroundColor: 'white',
    padding: 7,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default styles;
