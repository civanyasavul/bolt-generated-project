import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Prostatit Nedir?</Title>
          <Paragraph>
            Prostatit, prostat bezinin iltihaplanması durumudur. Bu rahatsızlık hakkında 
            detaylı bilgi edinmek ve tedavi yöntemlerini öğrenmek için uygulamamızı kullanabilirsiniz.
          </Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Hızlı Erişim</Title>
          <Button mode="contained" style={styles.button} onPress={() => navigation.navigate('Belirtiler')}>
            Belirtiler
          </Button>
          <Button mode="contained" style={styles.button} onPress={() => navigation.navigate('Tedavi')}>
            Tedavi Yöntemleri
          </Button>
          <Button mode="contained" style={styles.button} onPress={() => navigation.navigate('İletişim')}>
            Doktora Danış
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
  button: {
    marginVertical: 5,
    backgroundColor: '#2c3e50',
  },
});
