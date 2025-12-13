import { View, StyleSheet, Modal, Button, Text, Image, TextInput, Pressable, Alert } from "react-native";
import { useRef, useEffect } from "react";
import { Colors } from "../Colors/color";

function AddGroceryItems(props) {
    const inputRef = useRef(null);
    useEffect(() => {
        if (props.visible) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        }
    }, [props.visible]);
    function inputTextChange(inputText) {
        props.setOneGrocery((currentGrocery) => {
            return { ...currentGrocery, value: inputText }
        });
    }
    function addGrocery() {
        if (props.grocery.value.trim().length === 0) {
            Alert.alert('Invalid Input', 'Please enter a valid grocery item.', [{ text: 'Okay', style: 'destructive' }]);
            return;
        }
        props.onAdd(props.grocery);
    }
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                    <View>
                        <Text style={styles.addGrocery}>Add Grocery Items</Text>
                    </View>
                    < Pressable onPress={props.onClose}>
                        <Image source={require('../assets/images/crossButton.png')} style={{ width: 20, height: 20 }} />
                    </Pressable>
                </View>
                <View style={styles.contentContainer}>
                    <View >
                        <Image source={require('../assets/images/grocery.png')} style={styles.image} />
                    </View>
                    <View style={styles.addGroceryTextInput} >
                        <TextInput ref={inputRef} placeholder="Enter Grocery Item" style={styles.textInput} value={props.grocery.value} onChangeText={inputTextChange} onSubmitEditing={addGrocery} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={{ color: Colors.success }}>
                            <Button title="Add Item" color={Colors.success} onPress={addGrocery} />
                        </View>
                        <View style={{ width: 20 }}></View>
                        <View style={{ color: Colors.danger }}>
                            <Button title="Cancel" color={Colors.danger} onPress={props.onClose} />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
export default AddGroceryItems;
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: Colors.primary
    },
    headerContainer: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.primary
    },
    addGrocery: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.text
    },
    contentContainer: {
        flex: 1,
        backgroundColor: Colors.secondary,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // paddingTop: 50,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    addGroceryTextInput: {
        backgroundColor: Colors.background,
        width: '70%',
        padding: 10,
        borderRadius: 8,
        fontWeight: 'bold',
        borderColor: Colors.card,
        borderWidth: 1,
    },
    textInput: {
        fontSize: 16,
        color: Colors.text,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    }

})