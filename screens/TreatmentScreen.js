import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export default function TreatmentScreen() {
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Medikal Tedavi</Title>
          <Paragraph>
            - Antibiyotik tedavisi{'\n'}
            - Ağrı kesiciler{'\n'}
            - Anti-inflamatuar ilaçlar{'\n'}
            - Alfa blokörler
          </Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Yaşam Tarzı Değişiklikleri</Title>
          <Paragraph>
            - Düzenli egzersiz{'\n'}
            - Sağlıklı beslenme{'\n'}
            - Bol su tüketimi{'\n'}
            - Stres yönetimi
          </Paragraph>
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
});
