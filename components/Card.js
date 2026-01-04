import { View, StyleSheet } from "react-native";
import Colors from "../utils/Colors";
function Card({children}) {
    return(
        <View style={[styles.card]}>
            {children}
        </View>
    );
}
export default Card;

const styles = StyleSheet.create({
    card:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        backgroundColor: Colors.primary800,
        padding: 16,
        borderRadius: 8,
        shadowColor: 'black',
        marginHorizontal: 10,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.75,
        elevation: 4,
    }
})