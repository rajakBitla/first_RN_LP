import { View, Text, Image, StyleSheet, ScrollView, Pressable } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons';



function AboutMealScreen({ navigation, route }) {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    const [isFavorite, setIsFavorite] = useState(selectedMeal.isFavorite);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable onPress={markFavorite} style={{ marginRight: 10 }}>
                    <Ionicons 
                        name={isFavorite ? "star" : "star-outline"} 
                        size={24}
                        color={isFavorite ? "yellow" : "white"}  style={{marginLeft:8}}
                    />
                </Pressable>
            ),
        });
    }, [navigation, isFavorite]);

    function markFavorite() {
         setIsFavorite(prevState => !prevState);
         selectedMeal.isFavorite = !isFavorite;
    }
    return (
        <ScrollView>
            <View style={styles.mainScreen}>
                <View>
                    <Image source={{ uri: selectedMeal.imageUrl }} style={{ width: '100%', height: 350 }} />
                </View>
                <View style={styles.centre}>
                    <Text style={styles.title}>{selectedMeal.title}</Text>
                </View>
                <View style={styles.centre}>
                    <Text style={styles.title}>{selectedMeal.duration}m  {selectedMeal.complexity}  {selectedMeal.affordability}</Text>
                </View>
                <View style={[styles.subtitleContainer]}>
                    <Text style={styles.subtitle}>Ingredients</Text>
                </View>
                <View>
                    {selectedMeal.ingredients.map((ingredient) => <Text style={styles.subtitleText} key={ingredient}>{ingredient}</Text>)}
                </View>
                <View style={[styles.subtitleContainer]}>
                    <Text style={styles.subtitle}>Steps</Text>
                </View>
                <View>
                    {selectedMeal.steps.map((step) => <Text style={styles.subtitleText} key={step}>{step}</Text>)}
                </View>
            </View>
        </ScrollView>
    );
}

export default AboutMealScreen;

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
    },
    centre: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        alignItems: 'center',
        padding: 8,
        color: 'white'
    },
    subtitleContainer: {
        borderBottomWidth: 2,
        borderColor: '#e2b497',
        padding: 6,
        marginHorizontal: 30,
        marginVertical: 8,
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
        padding: 4,
        color: '#e2b497',
    },
    subtitleText: {
        marginHorizontal: 24,
        marginVertical: 4,
        textAlign: 'center',
        backgroundColor: '#e2b497',
        color: '#351401',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
});