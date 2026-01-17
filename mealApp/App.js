import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesList from './screens/CategoriesList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import AboutMealScreen from './screens/AboutMealScreen';
import Favorites from './screens/Favorites';
import { Ionicons } from '@expo/vector-icons';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerStyle: { backgroundColor: '#351401' }, headerTintColor: 'white', sceneContainerStyle: { backgroundColor: '#3f2f25' }, drawerContentStyle: { backgroundColor: '#351401' }, drawerInactiveTintColor: 'white', drawerActiveTintColor: '#351401', drawerActiveBackgroundColor: '#e4baa1' }}>
      <Drawer.Screen name="Categories" component={CategoriesList} options={{
        title: 'All Categories',
        drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />
      }} />
      <Drawer.Screen name="favorites" component={Favorites} options={{ 
        title: 'Favorites',
        drawerIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size} />
      }} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        {/* For setting the default styles for all the pages we can use screenOptions so no need to repeat option config in each screen even though we can override this in screens */}
        <Stack.Navigator initialRouteName='MealsCategories'
          screenOptions={{ headerStyle: { backgroundColor: '#351401' }, headerTintColor: 'white', contentStyle: { backgroundColor: '#3f2f25' }, headerBackTitle: 'Back' }}>
          <Stack.Screen name="MealsCategories" component={DrawerNavigator} options={{ headerShown: false }} />
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
