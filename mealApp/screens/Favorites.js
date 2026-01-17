import { View ,Text ,StyleSheet} from "react-native";
function Favorites() {
    return (
         <View style={styles.container}>
            <Text style={styles.text}>Favorites Screen</Text>
        </View>
    );
}

export default Favorites;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3f2f25', // Ensure the background color is set
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});