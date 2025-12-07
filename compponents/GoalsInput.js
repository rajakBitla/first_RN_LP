import { StyleSheet, View, TextInput, Button ,Modal , Image } from "react-native";
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
        // normal approach
        // <View style={styles.textInputContainer}>
        //     <TextInput style={styles.textInput} placeholder="Enter text here" onChangeText={enterGoals} value={enteredGoal}></TextInput>
        //     <Button title="Add Goal" onPress={setGoalsOnPressHandlers} />
        // </View>
        // using modal approach
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.textInputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput style={styles.textInput} placeholder="Enter text here" onChangeText={enterGoals} value={enteredGoal}></TextInput>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                            <Button title="Add Goal" color={'#b180f0'} onPress={setGoalsOnPressHandlers} />
                    </View>
                    <View style={styles.button}>
                            <Button  title="Cancel" color={'#fe1282'} onPress={props.onCancel} />
                    </View>
                </View>
                {/* <Button title="Add Goal" onPress={setGoalsOnPressHandlers} /> */}
            </View>
        </Modal>
    )
}
export default GoalsInput;
const styles = StyleSheet.create({
    textInputContainer: {
        flex: 1,
        // flexDirection: 'row',
        // marginHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        backgroundColor: '#311b6b',
    },
    textInput: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16,
        // marginRight: 8
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 16,
    },
    button :{
        width: '30%',
        marginHorizontal: 8,
        color :'#59065fff'
    },
    image : {
        width: 100,
        height: 100,
        marginBottom: 20,
    }
})