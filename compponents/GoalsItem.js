import { StyleSheet ,View, Text ,Pressable} from "react-native";
function GoalsItem( props) {
    return (
        // for normal text & view
        // <View key={props.index} style={styles.goalItem}>
        //     <Text style={styles.goalText}>{props.item}</Text>
        //   </View>

        // for the same thing using pressable to have press effect
        //  <Pressable 
        //     style={({ pressed }) => [styles.goalItem, pressed && styles.pressed ]}
        //     onPress={() => {console.log('Goal pressed:', props.item); }}>
        //     <Text style={styles.goalText}>{props.item}</Text>
        // </Pressable>

        // using same apporahch with pressed effect in the text also
        <Pressable 
            style={({ pressed }) => [styles.goalItem, pressed && styles.pressed]}
            onPress={() => {console.log('Goal pressed:', props.item); }}>
            {({ pressed }) => (
                <Text style={[styles.goalText, pressed && styles.pressedText]}>
                    {props.item}
                </Text>
            )}
        </Pressable>
    )
    
}
export default GoalsItem;
const styles = StyleSheet.create({
    goalItem :{ 
        borderWidth: 1,
        borderColor: '#7dd5f5ff', 
        padding: 8, 
        marginVertical: 8, 
        backgroundColor: '#7dd5f5ff',
        borderRadius: 6,
     },
        goalText:{
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'Arial',
        },
        pressed: {
        backgroundColor: '#676b6dff', // Darker shade when pressed
        opacity: 0.8,
        // transform: [{ scale: 0.98 }], // Slightly shrink when pressed
    },
    pressedText: {
        color: '#000000', // Change text color when pressed
        fontSize: 16,     // You can change other text properties too
    },

})