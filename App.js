import StartGameScreens from "./screens/StartGameScreens";
import { StyleSheet ,ImageBackground , SafeAreaView} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreens from "./screens/GameScreen";
import Colors from "./utils/Colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
export default function App() {
  const [userNumber,setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
  if(!fontsLoaded){
    return <AppLoading />;
  }
  function pickedNumeberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  function gameOverHandler(numberOfRounds){
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }
  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRounds(0);
    setGameIsOver(true);
  }
  let screen = <StartGameScreens onPickNumber={pickedNumeberHandler} />;
  if(userNumber){
    screen = <GameScreens  userNumber={userNumber} onGameOver={gameOverHandler} />;
  }
  if(gameIsOver && userNumber){
    screen = <GameOverScreen guessesRounds={guessRounds} userNumber={userNumber} onStartNewGame={startNewGameHandler} />;
  }
  
  return (
  <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
    <ImageBackground source={require('./assets/images/background.png')} resizeMode="cover" style={styles.rootScreen} imageStyle={{opacity:0.15}}>
  <SafeAreaView style={styles.rootScreen}>
    {screen}
  </SafeAreaView>
    </ImageBackground>
  </LinearGradient>
  );
}

const styles = StyleSheet.create({
rootScreen :{
  flex:1,
}
})

