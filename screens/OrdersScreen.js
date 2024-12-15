import React, { useState, useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';

export default function OrdersScreen() {
  const { theme } = useContext(ThemeContext);

  const [orders] = useState([
    { id: '1', items: 'Hambúrguer, Refrigerante', total: 20.0, date: '2024-12-12' },
    { id: '2', items: 'Bolo de Chocolate, Suco Natural', total: 20.0, date: '2024-12-11' },
    { id: '3', items: 'Arroz com Feijão, Salada Caesar', total: 33.0, date: '2024-12-10' },
  ]);

  const renderOrder = ({ item }) => (
    <View
      style={[
        styles.orderContainer,
        { backgroundColor: theme.cardBackgroundColor || '#f9f9f9' },
      ]}
    >
      <Text style={[styles.orderTitle, { color: theme.textColor || '#333' }]}>
        Pedido #{item.id}
      </Text>
      <Text style={[styles.orderDetail, { color: theme.textColor || '#555' }]}>
        Itens: {item.items}
      </Text>
      <Text style={[styles.orderDetail, { color: theme.textColor || '#555' }]}>
        Total: R$ {item.total.toFixed(2)}
      </Text>
      <Text style={[styles.orderDetail, { color: theme.textColor || '#555' }]}>
        Data: {item.date}
      </Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor || '#fff' }]}>
      <Text style={[styles.title, { color: theme.textColor || '#000' }]}>Seus Pedidos</Text>
      <FlatList
        data={orders}
        renderItem={renderOrder}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  listContent: {
    paddingBottom: 20,
  },
  orderContainer: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  orderTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  orderDetail: {
    fontSize: 16,
    lineHeight: 22,
  },
});

