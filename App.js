import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import HelloWorld from './components/HelloWorld';
import SimpleCounter from './components/SimpleCounter';
import Contact from './components/Contact';

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>

        <Contact />
        <Text>So now we're good to go</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <HelloWorld name="Jadu" />
        <SimpleCounter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
