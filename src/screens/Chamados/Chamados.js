import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import DropDownPicker from 'react-native-dropdown-picker';
import { Picker } from '@react-native-picker/picker';


const Chamados = () => {
  const [nome, setNome] = useState('');
  const [selecao, setSelecao] = useState('');
  const [observacao, setObservacao] = useState('');

  const handleEnviar = () => {
    console.log('Nome:', nome);
    console.log('Seleção:', selecao);
    console.log('Observação:', observacao);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Tipo de chamado:</Text>
      <Picker
      style={styles.picker}
        selectedValue={selecao}
        onValueChange={(itemValue, itemIndex) =>
          setSelecao(itemValue)
        }>
        <Picker.Item label="Suporte" value="Suporte" />
        <Picker.Item label="Infraestrutura" value="Infraestrutura" />
        <Picker.Item label="Equipamento" value="Equipamento" />
      </Picker>


      <Text style={styles.label}>Observação:</Text>
      <TextInput
        style={styles.textarea}
        placeholder="Digite sua observação"
        multiline
        numberOfLines={4}
        value={observacao}
        onChangeText={setObservacao}
      />

      <TouchableOpacity style={styles.button} onPress={handleEnviar}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Chamados;
