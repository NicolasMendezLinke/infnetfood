import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert, Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import { ThemeContext } from '../contexts/ThemeContext';

export default function CheckoutScreen({ route }) {
  const { cart, total } = route.params;
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const { theme } = useContext(ThemeContext);

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  useEffect(() => {
    const setupNotifications = async () => {
      try {
        const { status } = await Notifications.requestPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permissão Negada', 'Não foi possível habilitar as notificações.');
        }

        if (Platform.OS === 'android') {
          await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.HIGH,
            vibrationPattern: [0, 500, 250, 500],
            lightColor: '#FF231F7C',
          });
        }
      } catch (error) {
        console.error('Erro ao configurar notificações:', error);
      }
    };

    setupNotifications();
  }, []);

  const handleCheckout = () => {
    if (!address.trim() || !paymentMethod.trim()) {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios antes de continuar.');
      return;
    }

    try {
      Notifications.scheduleNotificationAsync({
        content: {
          title: 'Pedido Confirmado!',
          body: `Seu pedido de R$ ${total} foi confirmado e está a caminho.`,
        },
        trigger: { seconds: 1 },
      });
      Alert.alert('Sucesso', 'Pedido finalizado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar notificação:', error);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor || '#fff' }]}>
      <Text style={[styles.title, { color: theme.textColor || '#000' }]}>Finalizar Compra</Text>
      <Text style={[styles.total, { color: theme.textColor || '#000' }]}>
        Total: R$ {total}
      </Text>

      <Text style={[styles.label, { color: theme.textColor || '#000' }]}>
        Endereço de Entrega:
      </Text>
      <TextInput
        style={[
          styles.input,
          { borderColor: theme.textColor || '#ccc', color: theme.textColor || '#000' },
        ]}
        placeholder="Digite o endereço completo"
        value={address}
        onChangeText={setAddress}
        placeholderTextColor={theme.placeholderTextColor || '#888'}
      />

      <Text style={[styles.label, { color: theme.textColor || '#000' }]}>
        Método de Pagamento:
      </Text>
      <TextInput
        style={[
          styles.input,
          { borderColor: theme.textColor || '#ccc', color: theme.textColor || '#000' },
        ]}
        placeholder="Cartão, Pix, Boleto, etc."
        value={paymentMethod}
        onChangeText={setPaymentMethod}
        placeholderTextColor={theme.placeholderTextColor || '#888'}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Confirmar Pedido"
          color={theme.buttonColor || '#007BFF'}
          onPress={handleCheckout}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  total: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '400',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#f7f7f7',
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 5,
    overflow: 'hidden',
  },
});

