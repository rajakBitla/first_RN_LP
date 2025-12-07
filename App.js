import {StyleSheet, View, TextInput, ScrollView, FlatList ,Alert ,Button} from 'react-native';
import { useState } from 'react';
import GoalsItem from './compponents/GoalsItem';
import GoalsInput from './compponents/GoalsInput';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible , setModalVisibility] = useState(false);
  function setGoalsOnPressHandlers(enteredGoal) {
    if(enteredGoal.length === 0){
      Alert.alert('Empty Goal', 'Please enter a goal before adding!');
      return ;
    }
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
    endModalVisibleHandler();
  }
  function deleteGoalsHandler(id){
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal, index) => index !== id);
    }) 
  }
  function setModalVisibleHandler(){
    setModalVisibility(true);
  }
  function endModalVisibleHandler(){
    setModalVisibility(false);
  }
  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.container}>
      {/* normal approach */}
      {/* <GoalsInput  setGoalsOnPressHandlers={setGoalsOnPressHandlers} /> */}
      {/* using modal approach */}
      <Button title='Add New Goal' color={'#c465edff'} onPress={setModalVisibleHandler} />
      {modalVisible && <GoalsInput visible={modalVisible} setGoalsOnPressHandlers={setGoalsOnPressHandlers} onCancel={endModalVisibleHandler} />}
      <View style={styles.courseGoalsContainer}>
        {/* <ScrollView>
          {courseGoals.map((goal, index) => (
            <View key={index} style={{borderWidth: 1, borderColor: '#cccccc', padding: 8, marginVertical: 8, backgroundColor: '#e4e4e4'}}>
              <Text>{goal}</Text>
            </View>
          ))}
        </ScrollView> normal approach to do this  */}
        <FlatList data={courseGoals} renderItem={({ item, index }) => {
          return ( <GoalsItem index={index} item={item} onDeleteGoal={deleteGoalsHandler} /> )
        }} 
        keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
    </> 
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor : '#1e085a'
  },
  textInputContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 8,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#cccccc',
    padding: 8,
    marginVertical: 36
  },
  textInput: {
    width: '70%',
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 8,
    marginRight: 8
  },
  courseGoalsContainer: {
    flex: 6,
  }
});
