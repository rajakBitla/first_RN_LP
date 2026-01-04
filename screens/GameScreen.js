import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/TItle";
import { useState, useEffect, use } from "react";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import Colors from "../utils/Colors";
import { Ionicons } from '@expo/vector-icons'


function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}
let minBoundary = 1;
let maxBoundary = 100;
function GameScreens({ userNumber, onGameOver }) {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userNumber));
    const [rounds, setRounds] = useState([currentGuess]);
    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(rounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);
    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);
    function nextGuessHandler(direction) {
        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't lie!", 'You know that this is wrong...', [{ text: 'Sorry!', style: 'cancel' }]);
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setRounds((prevRounds) => [newRndNumber, ...prevRounds]);
    }
    return (
        <View style={Styles.mainView}>
            <View>
                <Title>Opponent's Guess</Title>
                <NumberContainer>{currentGuess}</NumberContainer>
                <Card>
                    <Text style={Styles.instructionText}>Higher or Lower ?</Text>

                    <View style={Styles.buttonsContainer}>
                        <View style={Styles.buttonContainer}>
                            <PrimaryButton onPressed={nextGuessHandler.bind(this, 'lower')}>
                                <Ionicons name="remove" size={24} color="white" />
                            </PrimaryButton>
                        </View>
                        <View style={Styles.buttonContainer}>
                            <PrimaryButton onPressed={nextGuessHandler.bind(this, 'greater')}>
                                <Ionicons name="add" size={24} color="white" />
                            </PrimaryButton>
                        </View>
                    </View>
                </Card>
            </View>
            {/* <View> old way of displaying rounds
                {rounds.map((guessRound, index) => (
                    <Text key={index}>{guessRound}</Text>
                ))}
            </View> */}
            <FlatList data={rounds} renderItem={(itemData) => (
                <View style={Styles.roundsListContainer}>
                    <Text style={Styles.itemText}>#{rounds.length - itemData.index}</Text>
                    <Text style={Styles.itemText}>Opponent's Guess : {itemData.item}</Text>
                </View>
            )} keyExtractor={(item) => item.toString()} />
        </View>
    )
}
export default GameScreens;

const Styles = StyleSheet.create({
    mainView: {
        flex: 1,
        padding: 24,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
    instructionText: {
        fontSize: 24,
        color: Colors.accent500,
        marginBottom: 12,
    },
    roundsListContainer: {
        flex: 1,
        padding: 16,
        backgroundColor: Colors.accent500,
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: Colors.primary800,
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.45,
        shadowRadius: 3,
    },
    itemText: {
        fontFamily: 'open-sans',
    }
});