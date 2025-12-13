import { StyleSheet, Pressable, Text, Image, Modal, View, Dimensions } from "react-native";
import { Colors } from "../Colors/color";
import { useState } from "react";

function CardImage({ photo, cardSize }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const screenHeight = Dimensions.get('window').height;

  return (
    <>
      {/* Card */}
      <Pressable
        style={[styles.card, { width: cardSize , height: cardSize }]}
        android_ripple={{ color: Colors.muted }}
        onPress={() => setSelectedImage(photo)}
      >
        <Image source={photo.src} style={[styles.cardImage, { height: cardSize }]} />
        <View style={styles.titleOverlay}>
          <Text style={styles.cardText}>{photo.title}</Text>
        </View>
      </Pressable>

      {/* Modal */}
      <Modal
        visible={!!selectedImage}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setSelectedImage(null)}
      >
        <Pressable
          style={styles.modalBackground}
          onPress={() => setSelectedImage(null)}
        >
          <Image
            source={selectedImage?.src}
            style={{ width: '90%', height: screenHeight * 0.7, resizeMode: 'contain', borderRadius: 12 }}
          />
          <Text style={styles.modalText}>{selectedImage?.title}</Text>
        </Pressable>
      </Modal>
    </>
  );
}

export default CardImage;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: 8,
    overflow: 'hidden',
    // position: 'relative',
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    resizeMode: 'cover',
  },
  titleOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingVertical: 4,
    alignItems: 'center',
  },
  cardText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    color: 'white',
    fontSize: 18,
    marginTop: 12,
    fontWeight: 'bold',
  },
});
