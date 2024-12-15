import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';

export default function CartScreen({ route, navigation }) {
  const { cart } = route.params;
  const { theme } = useContext(ThemeContext);

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  const renderCartItem = ({ item }) => {
    return (
      <View
        style={[
          styles.itemContainer,
          {
            borderBottomColor: theme.textColor || '#ccc',
          },
        ]}
      >
        <Text
          style={[
            styles.itemText,
            {
              color: theme.textColor || '#000',
            },
          ]}
        >
          {item.name} - R$ {item.price.toFixed(2)} x {item.quantity}
        </Text>
      </View>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor || '#fff' }]}>
      <Text style={[styles.title, { color: theme.textColor || '#000' }]}>
        Carrinho
      </Text>

      <FlatList
        data={cart}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />

      <Text style={[styles.total, { color: theme.textColor || '#000' }]}>
        Total: R$ {calculateTotal()}
      </Text>

      <View style={styles.buttonWrapper}>
        <Button
          title="Ir para o Checkout"
          color={theme.buttonColor || '#2196F3'}
          onPress={() =>
            navigation.navigate('Checkout', { cart, total: calculateTotal() })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    marginBottom: 16,
    paddingBottom: 10,
  },
  itemContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 6,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    fontWeight: '500',
  },
  total: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 20,
  },
  buttonWrapper: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
});
