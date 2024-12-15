import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { theme } = useContext(ThemeContext);

  const handleLogin = () => {
    if (username.trim() === 'Nicolas' && password.trim() === 'Senha123') {
      navigation.navigate('Home');
    } else {
      Alert.alert('Erro', 'Usuário ou senha inválidos!');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.title, { color: theme.textColor }]}>Bem-vindo ao InfnetFood!</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            {
              borderColor: theme.textColor,
              color: theme.textColor,
            },
          ]}
          placeholder="Digite seu usuário"
          placeholderTextColor={theme.textColor}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            {
              borderColor: theme.textColor,
              color: theme.textColor,
            },
          ]}
          placeholder="Digite sua senha"
          placeholderTextColor={theme.textColor}
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Entrar" onPress={handleLogin} color={theme.buttonColor || '#6200EE'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
    marginHorizontal: 40,
  },
});