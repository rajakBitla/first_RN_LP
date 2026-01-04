import { Text ,View, Pressable ,StyleSheet} from "react-native";
import Colors from "../utils/Colors";
function PrimaryButton({ children , onPressed}){
    return(
        <View style={styles.buttonOuterContainer}>
            <Pressable style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
            android_ripple={{color: Colors.primary600}} onPress={onPressed}
            >
            <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}
export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius:30,
        margin:6,
    },
    buttonInnerContainer:{
        backgroundColor: Colors.primary600,
        paddingVertical:8,
        paddingHorizontal:16,
        borderRadius:30,
    },
    buttonText:{
        color:'white',
        textAlign:'center',
    },
    pressed:{
        opacity:0.75,
    }
})