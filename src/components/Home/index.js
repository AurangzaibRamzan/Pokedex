import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';


import {
  TitleWrapper,
  TitleText,
  MainScrollView,
  RowWrapper,
  RowItem,
  NumberingText,
  ImageWrapper,
  PokeText,
  SepecialWrapper,
  AttributeWrapper,
} from './styles';


const renderRow = () => {
  return <RowWrapper>
    <RowItem>
      <NumberingText>#001</NumberingText>
      <ImageWrapper source={{ uri: 'https://img.pokemondb.net/artwork/bulbasaur.jpg' }} />
      <PokeText>Bulbasaur</PokeText>
      <SepecialWrapper >
        <AttributeWrapper>Grass</AttributeWrapper>
        <AttributeWrapper color={'#AA22B0'} >Posion</AttributeWrapper>
      </SepecialWrapper>
    </RowItem>
    <RowItem>
      <NumberingText>#001</NumberingText>
      <ImageWrapper source={{ uri: 'https://img.pokemondb.net/artwork/bulbasaur.jpg' }} />
      <PokeText>Bulbasaur</PokeText>
      <SepecialWrapper >
        <AttributeWrapper>Grass</AttributeWrapper>
        <AttributeWrapper color={'#AA22B0'} >Posion</AttributeWrapper>
      </SepecialWrapper>
    </RowItem>
    <RowItem>
      <NumberingText>#001</NumberingText>
      <ImageWrapper source={{ uri: 'https://img.pokemondb.net/artwork/bulbasaur.jpg' }} />
      <PokeText>Bulbasaur</PokeText>
      <SepecialWrapper >
        <AttributeWrapper>Grass</AttributeWrapper>
        <AttributeWrapper color={'#AA22B0'} >Posion</AttributeWrapper>
      </SepecialWrapper>
    </RowItem>
  </RowWrapper >;
}

const Home = () => {
  return (
    <ParallaxScrollView
      backgroundColor="#E51C23"
      contentBackgroundColor="#E51C23"
      parallaxHeaderHeight={50}
      renderForeground={() => (
        <TitleWrapper>
          <TitleText>PokeDex</TitleText>
        </TitleWrapper>
      )}>

      <MainScrollView >
        <FlatList
          data={new Array(6).fill(0)}
          renderItem={renderRow} />
      </MainScrollView >
    </ParallaxScrollView>
  );
};

export default Home;
