import { View, StyleSheet, Text, Pressable, FlatList } from "react-native"
import { Colors } from "../Colors/color";
function GroceryItemsLists(props) {
    console.log(props.groceries);


    return (
        <View style={styles.container}>
            <FlatList data={props.groceries} renderItem={({ item }) => {
                return (
                    <Pressable 
                    android_ripple={{ color: Colors.muted }} 
                    style={({ pressed }) => [styles.itemContainer,item.completed && styles.completedItem,pressed && styles.pressed,]} 
                    onPress={props.onToggle.bind(this, item.id)}
                    onLongPress={props.onLongPress.bind(this,item.id)}
                    >
                        <Text style={[
            styles.itemText,
            item.completed && styles.completedText,
          ]}>{item.value}</Text>
                    </Pressable>
                )
            }} keyExtractor={(item) => item.id.toString()} />
        </View>
    )
}


export default GroceryItemsLists;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        borderWidth: 1,
        borderColor: Colors.card,
        borderRadius: 8,
        padding: 8,
        marginBottom: '40%',
    },
    itemContainer: {
        padding: 12,
        margin: 8,
        borderWidth: 1,
        borderColor: Colors.card,
        borderRadius: 8,
        backgroundColor: Colors.secondary,
    },
    itemText: {
    fontSize: 18,
    color: Colors.text,
  },
    completedItem: {
    backgroundColor: "#E0E0E0",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: Colors.muted,
  },
  pressed: {
    opacity: 0.6,
  },


})