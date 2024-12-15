import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';

const categories = [
  { id: '1', name: 'Lanches' },
  { id: '2', name: 'Bebidas' },
  { id: '3', name: 'Sobremesas' },
  { id: '4', name: 'Pratos Principais' },
  { id: '5', name: 'Saladas' },
];

export default function HomeScreen({ navigation }) {
  const { theme } = useContext(ThemeContext);

  const renderCategory = ({ item }) => {
    return (
      <TouchableOpacity
        style={[
          styles.itemContainer,
          { backgroundColor: theme.itemBackgroundColor || '#f0f0f0' },
        ]}
        onPress={() => navigation.navigate('Products', { category: item.name })}
      >
        <Text
          style={[
            styles.itemText,
            { color: theme.textColor || '#000' },
          ]}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor || '#fff' }]}>
      <Text style={[styles.title, { color: theme.textColor || '#000' }]}>
        Escolha uma Categoria
      </Text>

      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />

      <View style={styles.buttonsWrapper}>
        <View style={styles.button}>
          <Button
            title="Ver Carrinho"
            onPress={() => navigation.navigate('Cart', { cart: [] })}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Ver Perfil"
            onPress={() => navigation.navigate('Profile')}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Ver Pedidos"
            onPress={() => navigation.navigate('Orders')}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Ver Restaurantes"
            onPress={() => navigation.navigate('Restaurants')}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Configurações"
            onPress={() => navigation.navigate('Settings')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    marginBottom: 20,
  },
  itemContainer: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemText: {
    fontSize: 18,
    fontWeight: '500',
  },
  buttonsWrapper: {
    flexDirection: 'column',
    gap: 12,
    marginTop: 10,
  },
  button: {
    marginVertical: 6,
  },
});

