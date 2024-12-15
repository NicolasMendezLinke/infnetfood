import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';

export default function RestaurantDetailsScreen({ route }) {
  const { theme } = useContext(ThemeContext);
  const { restaurant } = route.params;

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.name, { color: theme.textColor }]}>{restaurant.name}</Text>
      <Text style={[styles.detail, { color: theme.textColor }]}>
        <Text style={styles.label}>Endereço:</Text> {restaurant.address}
      </Text>
      <Text style={[styles.detail, { color: theme.textColor }]}>
        <Text style={styles.label}>Avaliação:</Text> {restaurant.rating}
      </Text>
      <Text style={[styles.detail, { color: theme.textColor }]}>
        <Text style={styles.label}>Prato principal:</Text> {restaurant.menuItem}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  detail: {
    fontSize: 18,
    marginVertical: 8,
    lineHeight: 24,
  },
  label: {
    fontWeight: '600',
  },
});


