import { Image, View, StyleSheet, Text } from "react-native";
import Title from "../components/TItle";
import Colors from "../utils/Colors";
import PrimaryButton from "../components/PrimaryButton";

function GameOverScreen({guessesRounds, userNumber, onStartNewGame}) {
    return (
        <View style={styles.screen}>
            <Title >Game Over!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.png')} />
            </View>
            <View>
                <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlightText}>{guessesRounds}</Text> rounds to guess the number <Text style={styles.highlightText}>{userNumber}</Text>.</Text>
            </View>
            <View>
                <PrimaryButton onPressed={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </View>
    )
}
export default GameOverScreen;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText :{
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginHorizontal: 24,
        marginBottom: 24,
    },
    highlightText:{
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
    }
})