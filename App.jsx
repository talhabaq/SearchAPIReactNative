import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
const App = () => {
  const [data, setData] = useState([])
  const Search = async (text) => {
    const url = `http://10.0.2.2:3000/users?q=${text}`
    let result = await fetch(url)
    result = await result.json()
    if (result) {
      setData(result)
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <TextInput placeholder='Search'
        style={{ borderWidth: 2, borderColor: "black", margin: 15, fontSize: 20 }}
        onChangeText={(text) => Search(text)} />
      {
        data.length ?
          data.map((item) =>
            <View>
              <Text>{item.name}</Text>
              <Text>{item.email}</Text>
              <Text>{item.age}</Text>
            </View>)
          : null
      }
    </View>
  )
}
export default App
