import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Alert, Share } from 'react-native';
import { TextInput, Button, Card, Title } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async () => {
    if (!name || !age || !symptoms || !phone) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun.');
      return;
    }

    try {
      const formData = {
        name,
        age,
        symptoms,
        phone,
        date: new Date().toISOString(),
      };

      await AsyncStorage.setItem(
        `consultation_${Date.now()}`,
        JSON.stringify(formData)
      );

      Alert.alert(
        'Başarılı',
        'Form kaydedildi. Dışa aktarmak için "Verileri Dışa Aktar" butonunu kullanın.'
      );

      setName('');
      setAge('');
      setSymptoms('');
      setPhone('');
    } catch (error) {
      Alert.alert('Hata', 'Bir sorun oluştu. Lütfen tekrar deneyin.');
    }
  };

  const exportData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const consultationKeys = keys.filter(key => key.startsWith('consultation_'));
      const result = await AsyncStorage.multiGet(consultationKeys);
      
      const formattedData = result.map(([key, value]) => {
        const data = JSON.parse(value);
        return `Tarih: ${new Date(data.date).toLocaleString()}\nAd Soyad: ${data.name}\nYaş: ${data.age}\nTelefon: ${data.phone}\nBelirtiler: ${data.symptoms}\n\n`;
      }).join('---\n');

      await Share.share({
        message: formattedData,
        title: 'Hasta Kayıtları'
      });
    } catch (error) {
      Alert.alert('Hata', 'Veriler dışa aktarılırken bir sorun oluştu.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Doktora Danışın</Title>
          
          <TextInput
            label="Adınız Soyadınız"
            value={name}
            onChangeText={setName}
            style={styles.input}
            mode="outlined"
          />

          <TextInput
            label="Yaşınız"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
            style={styles.input}
            mode="outlined"
          />

          <TextInput
            label="Belirtileriniz"
            value={symptoms}
            onChangeText={setSymptoms}
            multiline
            numberOfLines={4}
            style={styles.input}
            mode="outlined"
          />

          <TextInput
            label="Telefon Numaranız"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            style={styles.input}
            mode="outlined"
          />

          <Button
            mode="contained"
            onPress={handleSubmit}
            style={styles.button}
          >
            Gönder
          </Button>

          <Button
            mode="outlined"
            onPress={exportData}
            style={styles.exportButton}
          >
            Verileri Dışa Aktar
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  card: {
    margin: 10,
    elevation: 4,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#2c3e50',
  },
  exportButton: {
    marginTop: 10,
    borderColor: '#2c3e50',
  }
});
