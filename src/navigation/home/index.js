import React from 'react'
import { View } from 'react-native'
import { GoogleBookSearch } from 'react-native-google-books';


export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <GoogleBookSearch
          apikey={"AIzaSyB_zA5Vzx8ov4fXezEzbDK_LcSTPj-Rbr0"}
          onResultPress={(book) => console.log(book)}
        />
      </View>
    )
  }
}