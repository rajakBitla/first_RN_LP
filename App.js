import { StyleSheet, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Colors } from './Colors/color';
import PhotoGalary from './compponents/PhotoGalary';
export default function App() {

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <PhotoGalary />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: Colors.background
  },
});
