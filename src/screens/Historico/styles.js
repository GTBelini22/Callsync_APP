import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:17,
    maxHeight: 550,
    marginBottom:20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: '#cccccc',
  },
  input: {
    backgroundColor: '#F5F5F5',
    height:30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    flex: 1, // Isso permite que o TextInput ocupe o espaço restante
    marginRight: 10, // Espaçamento à direita para separar do botão
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    marginVertical: 10,
  },
  itemContainer: {
    backgroundColor: '#ffffff',
    height: 90,
    width: '95%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    borderWidth:0.5,
    borderColor: '#CCCCCC',
  },
  
  itemFlat: {
    // Estilos específicos para centralizar o conteúdo dentro do itemContainer
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundedButton: {
    backgroundColor: '#27B1DC',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 24,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default styles;
