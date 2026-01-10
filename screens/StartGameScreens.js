import { TextInput, View, StyleSheet , Alert, Text, ScrollView, KeyboardAvoidingView} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../utils/Colors";
import Title from "../components/TItle";
import Card from "../components/Card";


function StartGameScreens({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');
    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }
    function resetInputHandler() {
        setEnteredNumber('');
    }
    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid Number!','Number has to be between 1 and 99',
                  [{text:'Okay',style:'destructive',onPress:resetInputHandler}, {text:'Cancel',style:'cancel'}]);
            return;
        }
        onPickNumber(chosenNumber); 
    }
    return (
        <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={styles.mainContainer}>
            <Title>Guess My Number</Title>
        <Card>
            <Text style={styles.instructionText}>Enter a Number</Text>
            <TextInput value={enteredNumber} onChangeText={numberInputHandler} style={styles.inputContainer} keyboardType="number-pad" maxLength={2} autoCapitalize="none" autoCorrect={false}
            ></TextInput>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                <PrimaryButton onPressed={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPressed={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
            </View>
        </Card>
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
    )
}
export default StartGameScreens;

const styles = StyleSheet.create({
    screen:{
        flex:1,
    },
    mainContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
    },
    inputContainer: {
        height: 60,
        width: 60,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 4,
        fontFamily: 'open-sans-bold',
        textAlign: 'center',
    },
    buttonsContainer:{
        flexDirection:'row',
    },
    buttonContainer:{
        flex:1,
    },
    instructionText:{
        color:Colors.accent500,
        fontFamily:'open-sans',
        fontSize:24,
    }
})