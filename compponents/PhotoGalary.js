import { StyleSheet, View, Text, FlatList, Dimensions } from "react-native";
import { Colors } from "../Colors/color";
import CardImage from "../compponents/ImageCard";
import { Photos } from "../data/Photos";

const screenWidth = Dimensions.get('window').width;
const padding = 16;
const spacing = 16;
const numColumns = 2;
const cardSize = (screenWidth - padding * 2 - spacing * (numColumns - 1)) / numColumns;

function PhotoGallery() {
    return (
        <>
        <View style={styles.horizontalcontainer}>
            <Text style={styles.headerText}>Photo Gallery</Text>
            {/* horizontal scrolling */}
            <FlatList
                data={Photos}
                horizontal={true}    
                showsHorizontalScrollIndicator={false} 
                renderItem={({ item }) => <CardImage photo={item} cardSize={120} />}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingHorizontal: padding }}
                ItemSeparatorComponent={() => <View style={{ width: 12 }} />} 
            />
        </View>
        <View style={styles.container}>
            {/* Vertical scrolling */}
            <FlatList
                data={Photos}
                numColumns={numColumns}
                renderItem={({ item }) => <CardImage photo={item} cardSize={cardSize} />}
                keyExtractor={(item) => item.id}
                columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: spacing }}
                contentContainerStyle={{ padding: padding }}
            />
        </View>
        
        </>
    );
}

export default PhotoGallery;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    horizontalcontainer: {
        backgroundColor: Colors.background,
        marginBottom: 16,
    },
    headerText: {
        color: Colors.text,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 16,
    },
});
