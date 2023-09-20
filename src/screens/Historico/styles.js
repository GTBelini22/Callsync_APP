import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
});

export default styles;
