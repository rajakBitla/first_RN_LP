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
        // <Pressable 
        //     style={({ pressed }) => [styles.goalItem, pressed && styles.pressed]}
        //     onPress={props.onDeleteGoal.bind(this, props.index)}>
        //     {({ pressed }) => (
        //         <Text style={[styles.goalText, pressed && styles.pressedText]}>
        //             {props.item}
        //         </Text>
        //     )}
        // </Pressable>
        // pressable wrapping the whole view and using ripple effect for android & IOS
        <Pressable android_ripple={{color : '#ffffff'}} onPress={props.onDeleteGoal.bind(this, props.index)}>
            <View key={props.index} style={styles.goalItem}>
             <Text style={styles.goalText}>{props.item}</Text>
          </View>
        </Pressable>
    )
    
}
export default GoalsItem;
const styles = StyleSheet.create({
    goalItem :{ 
        borderWidth: 1,
        borderColor: '#59065fff', 
        padding: 8, 
        marginVertical: 8, 
        backgroundColor: '#59065fff',
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