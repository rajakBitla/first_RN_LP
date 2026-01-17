import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesList from './screens/CategoriesList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import AboutMealScreen from './screens/AboutMealScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        {/* For setting the default styles for all the pages we can use screenOptions so no need to repeat option config in each screen even though we can override this in screens */}
        <Stack.Navigator initialRouteName='MealsCategories' 
        screenOptions={{ headerStyle: { backgroundColor: '#351401' }, headerTintColor: 'white', contentStyle: { backgroundColor: '#3f2f25' }, headerBackTitle: 'Back' }}> 
          <Stack.Screen name="MealsCategories" component={CategoriesList} options={{ title: 'All Categories' }} />
          <Stack.Screen name="MealsOverView" component={MealsOverViewScreen} options={{ title: 'Meals OverView' }} />
          <Stack.Screen name="AboutMeal" component={AboutMealScreen} options={{ title: 'About The Meal' }} />
          {/* we can also pass arrow functions here in the options eg given below  */}
          {/* options={({ route, navigation }) => {
            const catTitle = route.params.categoryTitle;
            return {
              title: catTitle,
            };
          } } */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
