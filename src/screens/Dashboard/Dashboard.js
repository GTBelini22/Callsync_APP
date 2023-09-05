import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Styles';

const Dashboard = () => {
  return (
    <View >
      <View style={styles.rectangle}>
        <Text style={styles.text}>Olá</Text>
      </View>
    </View>
  );
};

export default Dashboard;
