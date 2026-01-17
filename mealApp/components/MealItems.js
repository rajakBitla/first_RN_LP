import { View , Text ,StyleSheet ,Image, Pressable} from "react-native";

function MealItems({data , onPress}) {
  return (
    <View style={styles.mainCard}>
    <Pressable onPress={onPress} android_ripple={{color:'#ccc'}} style={({pressed})=> pressed ? {opacity:0.5} : null}>
       <View>
        <Image source={{uri: data.imageUrl}} style={styles.image} />
       </View>
       <View style={styles.titleContainer}>
        <Text>{data.title}</Text>
       </View>
       <View style={styles.titleContainer}>
        <Text> <Text>{data.duration}m</Text>  <Text>{data.complexity.toUpperCase()}</Text>  {data.affordability.toUpperCase()}  </Text>    
       </View>
    </Pressable>
    </View>
  );
}

export default MealItems;

const styles = StyleSheet.create({
mainCard:{
    margin:16,
    borderRadius:8,
    overflow:'hidden',
    backgroundColor:'white',
    elevation:4,
    shadowColor:'black',
    shadowOpacity:0.25,
    shadowOffset:{width:0,height:2},
    shadowRadius:8,
},
titleContainer:{
    padding:2,  
    alignItems:'center',
},
image:{
    width:'100%',
    height:200,
}
});