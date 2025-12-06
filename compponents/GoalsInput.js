import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";
function GoalsInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('');
    function enterGoals(enteredText) {
        setEnteredGoal(enteredText);
    }
    function setGoalsOnPressHandlers() {
        props.setGoalsOnPressHandlers(enteredGoal);
        setEnteredGoal('');
    }
    return (
        <View style={styles.textInputContainer}>
            <TextInput style={styles.textInput} placeholder="Enter text here" onChangeText={enterGoals} value={enteredGoal}></TextInput>
            <Button title="Add Goal" onPress={setGoalsOnPressHandlers} />
        </View>
    )
}
export default GoalsInput;
const styles = StyleSheet.create({
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
})