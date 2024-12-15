import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';

const restaurants = [
  { id: '1', name: 'Rio Park Restaurante', address: 'Rua Sacadura Cabral, Centro', rating: 4.5, menuItem: 'Moqueca de Peixe' },
  { id: '2', name: 'Coração de Maria', address: 'Rua Moncorvo Filho, Centro', rating: 4.0, menuItem: 'Feijoada Completa' },
  { id: '3', name: 'Restaurante Hoo-lala', address: 'Av. Passos, Centro', rating: 4.7, menuItem: 'Yakissoba de Frango' },
  { id: '4', name: 'Galeto 183', address: 'Rua Santana, Centro', rating: 4.2, menuItem: 'Galeto com Batatas' },
  { id: '5', name: 'Restaurante Vila galé', address: 'Rua Riachuelo, Centro', rating: 4.8, menuItem: 'Bacalhau à Brás' },
  { id: '6', name: 'Restaurante Terezé', address: 'Rua Felicio dos santos, Centro', rating: 4.5, menuItem: 'Risoto de Cogumelos' },
  { id: '7', name: 'Restaurante principe de gamboa', address: 'Rua Pedro Ernesto, Centro', rating: 4.0, menuItem: 'Escondidinho de Carne Seca' },
  { id: '8', name: 'Restaurante 365', address: 'Rua Equador, Centro', rating: 4.7, menuItem: 'Filé Mignon ao Molho Madeira' },
  { id: '9', name: 'Os Ximenes', address: 'Rua Teotonio Regadas, Centro', rating: 4.2, menuItem: 'Frango à Parmegiana' },
  { id: '10', name: 'Confeitaria Colombo', address: 'Rua Gonçalves Dias, Centro', rating: 4.8, menuItem: 'Torta de Limão' },
];

export default function RestaurantsScreen({ navigation }) {
  const { theme } = useContext(ThemeContext);

  const renderRestaurant = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.restaurantCard,
        {
          backgroundColor: theme.cardBackground,
          borderColor: theme.cardBorder || '#ddd',
        },
      ]}
      onPress={() => navigation.navigate('RestaurantDetails', { restaurant: item })}
    >
      <Text style={[styles.name, { color: theme.textColor }]}>{item.name}</Text>
      <Text style={[styles.details, { color: theme.textColor }]}>Avaliação: {item.rating.toFixed(1)}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Image
        source={{ uri: 'https://i.imgur.com/yoCbYMp.png' }}
        style={styles.mapImage}
        accessibilityLabel="Mapa da localização dos restaurantes"
      />
      <FlatList
        data={restaurants}
        renderItem={renderRestaurant}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  list: {
    paddingHorizontal: 16,
  },
  restaurantCard: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    marginTop: 4,
  },
});

