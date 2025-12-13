import { StyleSheet, View, Text, FlatList, Dimensions ,TextInput} from "react-native";
import { Colors } from "../Colors/color";
import CardImage from "../compponents/ImageCard";
import { Photos } from "../data/Photos";
import { useState } from "react";

const screenWidth = Dimensions.get('window').width;
const padding = 16;
const spacing = 16;
const numColumns = 2;
const cardSize = (screenWidth - padding * 2 - spacing * (numColumns - 1)) / numColumns;

function PhotoGallery() {
    const [filteredPhotos, setFilteredPhotos] = useState(Photos);
    function filterPhotos(text){
       setFilteredPhotos(Photos.filter(photo => photo.title.toLowerCase().includes(text.toLowerCase())));
    }
    return (
        <>
        <View style={styles.horizontalcontainer}>
            <Text style={styles.headerText}>Photo Gallery</Text>
            <TextInput style={styles.searchInput} placeholder="Search photos..."  placeholderTextColor={Colors.primary} onChangeText={filterPhotos} />
            {/* horizontal scrolling */}
         {filteredPhotos.length > 0 &&   <FlatList
                data={filteredPhotos}
                horizontal={true}    
                showsHorizontalScrollIndicator={false} 
                renderItem={({ item }) => <CardImage photo={item} cardSize={120} />}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingHorizontal: padding }}
                ItemSeparatorComponent={() => <View style={{ width: 12 }} />} 
            />}
        </View>
        <View style={styles.container}>
            {/* Vertical scrolling */}
          {filteredPhotos.length > 0 &&     <FlatList
                data={filteredPhotos}
                numColumns={numColumns}
                renderItem={({ item }) => <CardImage photo={item} cardSize={cardSize} />}
                keyExtractor={(item) => item.id}
                columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: spacing }}
                contentContainerStyle={{ padding: padding }}
            /> }
            {filteredPhotos.length === 0 && <Text style={styles.noPhotosText}>No photos found.</Text>}
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
    searchInput: {
        height: 40,
        width: '95%', 
        borderColor: Colors.card,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        marginHorizontal: 16,
        marginBottom: 16,
        color: Colors.primary,
        backgroundColor: Colors.muted,
    },
    noPhotosText: {
        color:Colors.text, 
        textAlign:'center', 
        marginTop:20}
});
