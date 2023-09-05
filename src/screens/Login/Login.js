import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import styles from './styles';
import app from '../../config/Firebase'; // Importe a instância correta
import { auth } from '../../config/Firebase';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading,setLoading] = useState(false);
  //const auth = getAuth(app);
  const [errorAlert, setErrorAlert] = useState({ visible: false, message: '' });
  const navigation = useNavigation();


  const handleLogin = async () => {
    setLoading(true);
    try {

      if (password === '') {
        Alert.alert('Senha vazio', 'Por favor, insira sua senha.');
        return;
      }
      const response = await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Dashboard'); // Substitua 'NomeDaTela' pelo nome correto da sua próxima tela
    } catch (error) {
      console.log(error);
      setErrorAlert({ visible: true, message: 'Usuário ou Senha incorreto.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('callsync/assets/logop.png')} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {errorAlert.visible && (
      <View style={styles.errorAlert}>
        <Text style={styles.errorText}>{errorAlert.message}</Text>
        <TouchableOpacity onPress={() => setErrorAlert({ visible: false, message: '' })}>
        </TouchableOpacity>
      </View>
    )}
      <TouchableOpacity style={styles.roundedButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
