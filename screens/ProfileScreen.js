import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';

export default function ProfileScreen() {
  const { theme } = useContext(ThemeContext);

  const user = {
    name: 'Nicolas',
    email: 'nicolas@email.exemplo.com',
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.title, { color: theme.textColor }]}>Perfil</Text>
      <View style={styles.infoContainer}>
        <Text style={[styles.infoLabel, { color: theme.textColor }]}>Nome:</Text>
        <Text style={[styles.infoValue, { color: theme.textColor }]}>{user.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={[styles.infoLabel, { color: theme.textColor }]}>Email:</Text>
        <Text style={[styles.infoValue, { color: theme.textColor }]}>{user.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    marginVertical: 8,
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 18,
    fontWeight: '500',
    marginRight: 8,
  },
  infoValue: {
    fontSize: 18,
    fontWeight: '400',
  },
});

