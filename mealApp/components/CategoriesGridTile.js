import { Text, View, Pressable , StyleSheet, Platform} from 'react-native';
function CategoriesGridTile({ data , onPress }) {
    
    return (
        <View style={[styles.gridItem]}>
            <Pressable android_ripple={{color:'#ccc'}} style={({pressed})=>[styles.button, pressed ? styles.pressedItem : null]} onPress={onPress}>
                <View style={[styles.innerContainer, { backgroundColor: data.color }]}>
                    <Text style={styles.title}>{data.title}</Text>
                </View>
            </Pressable>
        </View>
    );
}
export default CategoriesGridTile;

const styles = StyleSheet.create({
    pressedItem: {
        opacity: 0.5,
    },
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.30,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 8,
        overflow: Platform.select({ android: 'hidden', ios: 'visible' }),
        // overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    button : {
        flex:1,
    }, 
    innerContainer : {
        flex:1,
        padding:16,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
    },
    title : {
        fontWeight:'bold',
        fontSize:18,
    }

});