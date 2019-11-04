import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { RNCamera } from 'react-native-camera'
import RNTextDetector from "react-native-text-detector"
import { BookSearch } from 'react-native-google-books'


export default class TestScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: '', 
      textBlocks: []
    }
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { 
        quality: 0.5, 
        base64: true 
      }
      const { uri } = await this.camera.takePictureAsync(options)
      const textResponse = await RNTextDetector.detectFromUri(uri);
      console.log("TEXT RESPONSE: ", textResponse)
    }
  }

  async getGameofThronesBooks() {
    let books = await BookSearch.searchbook("game of thrones", "AIzaSyB_zA5Vzx8ov4fXezEzbDK_LcSTPj-Rbr0");
    console.log(books)
  }

  componentDidMount() {
    this.getGameofThronesBooks()
  }

  render() {
    return (
      <View style={style.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={style.preview}
          type={RNCamera.Constants.Type.back}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => this.takePicture()} style={style.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
        <Text style={{backgroundColor: 'white', height: 100}}>{(this.state.textBlocks.length) ? this.state.textBlocks[0].value : null}</Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: 'orange',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  }
})