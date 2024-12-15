import React, { useContext } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext'; 

export default function SettingsScreen() {
  const { isDarkTheme, setIsDarkTheme, theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.title, { color: theme.textColor }]}>Configurações</Text>
      <View style={styles.settingItem}>
        <Text style={[styles.label, { color: theme.textColor }]}>Tema escuro</Text>
        <Switch
          value={isDarkTheme}
          onValueChange={(value) => setIsDarkTheme(value)} 
          thumbColor={isDarkTheme ? '#f5dd4b' : '#f4f3f4'}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    padding: 10,
  },
  label: {
    fontSize: 18,
  },
});

