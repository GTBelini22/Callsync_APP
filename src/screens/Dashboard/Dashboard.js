import React from 'react';
import { View, Text, TouchableOpacity, useState } from 'react-native';
import { styles } from './Styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {
  const navigation = useNavigation();
  // const [isAdmin, setIsAdmin] = useState(true); // Suponha que isAdmin seja true para um administrador

  const handleAbrirChamado = () => {
    // Navegue para a tela de destino quando o botão for pressionado
    navigation.navigate('Chamados');
  };

  const handleHistorico = () => {
    // Navegue para a tela de destino quando o botão for pressionado
    navigation.navigate('Historico');
  };

  return (
    <View >

      <View style={styles.rectangle}>
      <Icon name="contact-page" size={70} color="black" style={{ marginLeft: 10 }} />
      <Text style={styles.text}>ola</Text>
      </View>

      <View style ={styles.containerButton}>

      <TouchableOpacity style={styles.button} onPress={handleAbrirChamado}>
        <Icon name="engineering" size={70} color="black" style={{ marginLeft: 37 }} />
        <Text style={styles.buttonText}>Abrir chamado</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={handleHistorico}>
        <Icon name="history" size={70} color="black" style={{ marginLeft: 27 }} />
        <Text style={styles.buttonText}>Historico</Text>
      </TouchableOpacity>


      </View>


    </View>
  );
};

export default Dashboard;