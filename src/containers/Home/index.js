import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';


const renderRow = () => {
  return <View style={{ flexDirection: 'row', marginTop: 4 }}>
    <View style={{ width: '33%', height: 112, backgroundColor: 'white', borderRadius: 8, marginRight: 4, paddingVertical: 6, paddingHorizontal: 8 }}>
      <Text style={{ color: '#7E94B3', fontSize: 12 }}>#001</Text>
      <View style={{ alignSelf: 'center' }}>
        <Image style={{ height: 48, width: 48 }} source={{ uri: 'https://img.pokemondb.net/artwork/bulbasaur.jpg' }} />
      </View>
      <Text style={{ fontSize: 14, color: '#1D3962', alignSelf: 'center' }}>Bulbasaur</Text>
      <View style={{ flexDirection: 'row',alignSelf:'center' }}>
        <Text style={{ fontSize: 10, paddingHorizontal: 5, backgroundColor: 'green', borderRadius: 5, color: '#fff' }}>Grass</Text>
        <Text style={{ marginLeft: 4,fontSize: 10, paddingHorizontal: 5, backgroundColor: '#AA22B0', borderRadius: 5, color: '#fff' }}>Posion</Text>
      </View>
    </View>
    <View style={{ width: '33%', height: 112, backgroundColor: 'white', borderRadius: 8, marginRight: 4, paddingVertical: 6, paddingHorizontal: 8 }}>
      <Text style={{ color: '#7E94B3', fontSize: 12 }}>#001</Text>
      <View style={{ alignSelf: 'center' }}>
        <Image style={{ height: 48, width: 48 }} source={{ uri: 'https://img.pokemondb.net/artwork/bulbasaur.jpg' }} />
      </View>
      <Text style={{ fontSize: 14, color: '#1D3962', alignSelf: 'center' }}>Bulbasaur</Text>
      <View style={{ flexDirection: 'row',alignSelf:'center' }}>
        <Text style={{ fontSize: 10, paddingHorizontal: 5, backgroundColor: 'green', borderRadius: 5, color: '#fff' }}>Grass</Text>
        <Text style={{ marginLeft: 4,fontSize: 10, paddingHorizontal: 5, backgroundColor: '#AA22B0', borderRadius: 5, color: '#fff' }}>Posion</Text>
      </View>
    </View><View style={{ width: '33%', height: 112, backgroundColor: 'white', borderRadius: 8, marginRight: 4, paddingVertical: 6, paddingHorizontal: 8 }}>
      <Text style={{ color: '#7E94B3', fontSize: 12 }}>#001</Text>
      <View style={{ alignSelf: 'center' }}>
        <Image style={{ height: 48, width: 48 }} source={{ uri: 'https://img.pokemondb.net/artwork/bulbasaur.jpg' }} />
      </View>
      <Text style={{ fontSize: 14, color: '#1D3962', alignSelf: 'center' }}>Bulbasaur</Text>
      <View style={{ flexDirection: 'row',alignSelf:'center' }}>
        <Text style={{ fontSize: 10, paddingHorizontal: 5, backgroundColor: 'green', borderRadius: 5, color: '#fff' }}>Grass</Text>
        <Text style={{ marginLeft: 4,fontSize: 10, paddingHorizontal: 5, backgroundColor: '#AA22B0', borderRadius: 5, color: '#fff' }}>Posion</Text>
      </View>
    </View>
  </View >;
}

const Home = () => {
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

export default Home;
