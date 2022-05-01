
import { StyleSheet, Text, View } from 'react-native';
import QuizScreen from "./Screens/QuizScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <QuizScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
