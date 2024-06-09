import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
  },
  conteudo: {
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 40,
    marginVertical: 80,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 10,
    marginBottom: 15,
  },
  texto: {
    marginBottom: 15,
  },
  imgCapa: {
    width: '90%',
    height: 200,
    marginBottom: 20,
  },
  botao: {
    borderWidth: 1,
    borderColor: '#382d00',
    backgroundColor: '#382d00',
    paddingVertical: 8,
    width: 250,
    alignItems: 'center',
    marginBottom: 10,
  },
  textoBotao: {
    color: 'white',
  },
});

export default styles;
