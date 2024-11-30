import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Title, List } from 'react-native-paper';

export default function SymptomsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Sık Görülen Belirtiler</Title>
          <List.Section>
            <List.Item
              title="İdrara çıkma güçlüğü"
              left={props => <List.Icon {...props} icon="circle" />}
            />
            <List.Item
              title="Sık idrara çıkma ihtiyacı"
              left={props => <List.Icon {...props} icon="circle" />}
            />
            <List.Item
              title="Kasık bölgesinde ağrı"
              left={props => <List.Icon {...props} icon="circle" />}
            />
            <List.Item
              title="Alt karın bölgesinde rahatsızlık"
              left={props => <List.Icon {...props} icon="circle" />}
            />
            <List.Item
              title="İdrar yaparken yanma hissi"
              left={props => <List.Icon {...props} icon="circle" />}
            />
          </List.Section>
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
