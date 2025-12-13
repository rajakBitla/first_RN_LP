import { StyleSheet, View, Text, Button, Image ,Alert} from 'react-native';
import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Colors } from './Colors/color';
import AddGroceryItems from './compponents/AddGroceryItems';
import GroceryItemsLists from './compponents/GroceryItemsLists';
export default function App() {
  const [groceryItems, setGroceryItems] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [enteredGroceryItem, setEnteredGroceryItem] = useState({ id: '', value: '', completed: false });

  function openModalHandler() {
    setEnteredGroceryItem({ id: Date.now().toString(), value: '', completed: false });
    setOpenModal(true)
  }
  function closeModalHandler() {
    setEnteredGroceryItem({ id: '', value: '', completed: false });
    setOpenModal(false)
  }
  function addItemHandler(item) {
    setGroceryItems((currentItems) => [...currentItems, item]);
    closeModalHandler();
  }
  function toggleItemHandler(id) {
    setGroceryItems((items) => items.map((item) => item.id === id ? { ...item, completed: !item.completed } : item ) );
  }
  function deleteItemHandler(id) {
    Alert.alert('Delete Item', 'Are you sure you want to delete this item?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          setGroceryItems((items) => items.filter((item) => item.id !== id));
        },
      },
    ]);
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Text style={styles.headerText}>Grocery Checklist</Text>
        <View style={styles.addItemBtnContainer}>
          <Button title="Add Item" color={Colors.text} onPress={openModalHandler} />
        </View>
        <AddGroceryItems visible={openModal} onAdd={addItemHandler} onClose={closeModalHandler} groceriesAll={groceryItems} grocery={enteredGroceryItem} setOneGrocery={setEnteredGroceryItem} />
        {groceryItems.length == 0 &&
          <View style={styles.imageContainer}>
            <Image source={require('./assets/images/emptyCart.png')} style={styles.image} />
            <Text style={styles.headerText}>No items in your grocery list</Text>
          </View>}
        {groceryItems.length > 0 && <GroceryItemsLists groceries={groceryItems} onToggle={toggleItemHandler} onLongPress={deleteItemHandler} />}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: Colors.primary
  },
  headerText: {
    color: Colors.text,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  addItemBtnContainer: {
    marginVertical: 16,
    color: Colors.secondary,
    backgroundColor: Colors.background,
    borderRadius: 8,
    fontWeight: 'bold',
    // flexDirection : 'row',
    // justifyContent : 'center',
    // alignItems : 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  imageContainer: {
    justifyContent: 'start',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    borderRadius: 8,
    marginVertical: '40%',
  }
});
