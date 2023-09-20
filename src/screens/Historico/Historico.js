import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import { app, firestore } from '../../config/Firebase' // Verifique a importação
import { styles } from './styles'; // Importe o estilo
import {collection, getDocs, query, where} from 'firebase/firestore'

const Historico = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  const fetchDataFromFirebase = async () => {
    try {
      const usersRef = query(collection(firestore,'users'));
      const resultado =  await getDocs(usersRef); // Use firestore assim
      console.log(resultado.docs);
      const searchData = resultado.docs.map((doc) => doc.data());
      setData(searchData);
    } catch (error) {
      console.error('Erro ao buscar dados do Firebase:', error);
    }
  };
  
  useEffect(() => {
    fetchDataFromFirebase();
  }, []);

  const handleSearch = async () => {
    try {
      const usersRef = query(collection(firestore,'users'));
      const response = await getDocs(usersRef);

      const searchData = response.docs.map((doc) => doc.data());
      setData(searchData);
    } catch (error) {
      console.error('Erro ao buscar dados do Firebase:', error);
    }
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua pesquisa"
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />
        <Button title="Pesquisar" onPress={handleSearch} />
      </View>
      <View style={styles.line} />
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>
            {item.nome} - {item.email}
          </Text>
        )}
      />
    </View>
  );
};

export default Historico;
