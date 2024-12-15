import React, { useState, useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Button } from 'react-native';
import LottieView from 'lottie-react-native';
import { ThemeContext } from '../contexts/ThemeContext';

const productsData = {
  Lanches: [
    { id: '1', name: 'Hambúrguer', price: 15.0 },
    { id: '2', name: 'Hot Dog', price: 10.0 },
  ],
  Bebidas: [
    { id: '3', name: 'Refrigerante', price: 5.0 },
    { id: '4', name: 'Suco Natural', price: 8.0 },
  ],
  Sobremesas: [
    { id: '5', name: 'Bolo de Chocolate', price: 12.0 },
    { id: '6', name: 'Sorvete', price: 7.0 },
  ],
  'Pratos Principais': [
    { id: '7', name: 'Arroz com Feijão', price: 20.0 },
    { id: '8', name: 'Macarrão', price: 18.0 },
  ],
  Saladas: [
    { id: '9', name: 'Salada Caesar', price: 13.0 },
    { id: '10', name: 'Salada Grega', price: 14.0 },
  ],
};

export default function ProductsScreen({ route, navigation }) {
  const { category } = route.params;
  const products = productsData[category] || [];
  const [cart, setCart] = useState([]);
  const [showAnimation, setShowAnimation] = useState(false);
  const { theme } = useContext(ThemeContext);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const productExists = prevCart.find((item) => item.id === product.id);

      if (productExists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });

    setShowAnimation(true);
    setTimeout(() => setShowAnimation(false), 1000);
  };

  const renderProduct = ({ item }) => {
    return (
      <TouchableOpacity
        style={[
          styles.itemContainer,
          { backgroundColor: theme.cardBackgroundColor || '#f8f8f8' },
        ]}
        onPress={() => addToCart(item)}
      >
        <Text style={[styles.itemText, { color: theme.textColor || '#333' }]}>
          {item.name} - R$ {item.price.toFixed(2)}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor || '#fff' }]}>
      <Text style={[styles.title, { color: theme.textColor || '#000' }]}>
        {category}
      </Text>

      {showAnimation && (
        <LottieView
          source={require('../assets/animations/cart-add.json')}
          autoPlay
          loop={false}
          style={styles.animation}
        />
      )}

      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Ver Carrinho"
          color={theme.buttonColor || '#2196F3'}
          onPress={() => navigation.navigate('Cart', { cart })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    paddingBottom: 20,
  },
  itemContainer: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemText: {
    fontSize: 18,
  },
  animation: {
    position: 'absolute',
    top: '40%',
    alignSelf: 'center',
    width: 180,
    height: 180,
    zIndex: 10,
  },
  buttonContainer: {
    marginTop: 20,
    paddingHorizontal: 50,
  },
});

