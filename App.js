/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const renderRow = () => {
  return <View style={{ flexDirection: 'row',marginTop: 4 }}>
    <View style={{ width: '33%', height: 112, backgroundColor: 'white', marginRight: 4 }}>
      <Text>hello</Text>
    </View>
    <View style={{ width: '33%', height: 112, backgroundColor: 'white', marginRight: 4 }}>
      <Text>hello</Text>
    </View>
    <View style={{ width: '33%', height: 112, backgroundColor: 'white', marginRight: 4 }}>
      <Text>hello</Text>
    </View>
  </View>;
}

const App = () => {
  return (
    <ParallaxScrollView
      backgroundColor="#E51C23"
      contentBackgroundColor="#E51C23"
      parallaxHeaderHeight={50}
      renderForeground={() => (
        <View style={{ height: 200, flex: 1, marginLeft: 16, justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 14, fontStyle: 'italic', color: '#fff' }}>PokeDex</Text>
        </View>
      )}>
      <ScrollView style={{ width: "100%", backgroundColor: '#F4F7FA', borderRadius: 8, paddingHorizontal: 8, paddingTop: 4 }}>
       
        {renderRow()}
        {renderRow()}
        {renderRow()}
        {renderRow()}
        {renderRow()}
        {renderRow()}
        {renderRow()}
      </ScrollView>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
