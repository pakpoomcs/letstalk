import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { useState } from 'react';


const PlaceholderImage = 'https://docs.expo.dev/static/images/tutorial/background-image.png';
import Button from './components/Button';
import * as ImagePicker from 'expo-image-picker';
import ImageViewer from './components/ImageViewer';

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);


    const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);

    } else {
      alert('You did not select any image.');
    }

    const onReset = () => {
      setShowAppOptions(false);
    };
  
    const onAddSticker = () => {
      // we will implement this later
    };
  
    const onSaveImageAsync = async () => {
      // we will implement this later
    };
  
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <ImageViewer
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>
      {showAppOptions ? (
        <View />
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },

  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },

});
