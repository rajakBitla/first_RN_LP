import { View ,StyleSheet , FlatList} from "react-native";

import { MEALS } from "../data/dummy-data";
import { useEffect} from "react";
import MealItems from "../components/MealItems";

function renderItems(itemData,navigation) {
    function pressHandler() {
        navigation.navigate('AboutMeal', {mealId: itemData.item.id,});
    }
    return (<MealItems data={itemData.item} onPress={pressHandler} />);
}

function MealsOverViewScreen({navigation, route}) {
    const catId = route?.params?.categoryId;
    const categoryTitle = route?.params?.categoryTitle;
    useEffect(() => {
        navigation.setOptions({
            title: categoryTitle || 'Meals Overview'
        });
    }, [navigation, categoryTitle]);
    const all_meals = MEALS.filter((meal) => meal.categoryIds.includes(catId));
    return (
        <View style={styles.mainScreen}>
            <FlatList data={all_meals} keyExtractor={(item) => item.id.toString()} renderItem={ (itemData) => renderItems(itemData, navigation)} />
        </View>
    );
}

export default MealsOverViewScreen;

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        padding: 16,
    },
});