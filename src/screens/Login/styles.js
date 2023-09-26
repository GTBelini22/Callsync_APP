import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
    paddingTop: 150, // Aumente esse valor para descer mais os elementos
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color: '#333',
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 30,
    marginBottom: 16,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  roundedButton: {
    backgroundColor: '#27B1DC',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
    width: '50%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  logo: {
    width: '100%',
    height: 300,
    position: 'absolute',
    top: '20%',
    left: 20,
  },
  errorText: {
    color: 'red', // Altere a cor para vermelho
    fontSize: 16,
    marginBottom: 10
  },
});

export default styles;
