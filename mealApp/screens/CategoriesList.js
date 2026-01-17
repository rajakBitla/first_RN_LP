import { CATEGORIES } from "../data/dummy-data";
import CategoriesGridTile from "../components/CategoriesGridTile";
import { FlatList, View, StyleSheet } from "react-native";

function renderCategoryItem(itemData, navigation) {
    function pressHandler() {
        navigation.navigate('MealsOverView', {
            categoryId: itemData.item.id,
            categoryTitle: itemData.item.title
        });
    }
    return <CategoriesGridTile data={itemData.item} onPress={pressHandler} />;
}

function CategoriesList({ navigation }) {

    return (
        <View style={styles.mainScreen}>
            <FlatList data={CATEGORIES} keyExtractor={(item) => item.id.toString()} renderItem={(itemData) => renderCategoryItem(itemData, navigation)} numColumns={2} />
        </View>
    )
}

export default CategoriesList;

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        padding: 16,
        backgroundColor: '#24180f',
    },
});