import React from 'react';
import { get } from 'lodash';
import {
  FlatList,
  ActivityIndicator,
  Dimensions,
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

const renderAttacks = (item, index) => {
  let color = item === 'Poison' ? '#AA22B0' : item === 'Fire' ? '#FF7A00' : item === 'Water' ? '#2BC3FF'
    : item === 'Flying' ? '#CC9CF7' : item === 'Normal' ? '#B57837' : 'green';
  return <AttributeWrapper color={color} key={index}>{item}</AttributeWrapper>;
}

const renderRow = ({ item, index }) => {
  const { item1, item2, item3 } = item;
  const type = (get(item1, 'types', [])).slice(0, 2);
  const type2 = (get(item2, 'types', [])).slice(0, 2);
  const type3 = (get(item3, 'types', [])).slice(0, 2);
  return <RowWrapper>
    {item1 ? <RowItem>
      <NumberingText> #{get(item1, 'number', '')}</NumberingText>
      <ImageWrapper resizeMethod={'auto'} source={{ uri: get(item1, 'image', '') || 'https://img.pokemondb.net/artwork/bulbasaur.jpg' }} />

      < PokeText > {get(item1, 'name', '')}</PokeText>
      <SepecialWrapper >
        {type.map((item, index) => renderAttacks(item, index))}
      </SepecialWrapper>
    </RowItem> : null}
    {item2 ? <RowItem>
      <NumberingText>#{get(item1, 'number', '')}</NumberingText>
      <ImageWrapper resizeMethod={'auto'} source={{ uri: get(item2, 'image', '') || 'https://img.pokemondb.net/artwork/bulbasaur.jpg' }} />
      <PokeText>{get(item2, 'name', '')}</PokeText>
      <SepecialWrapper >
        {type2.map((item, index) => renderAttacks(item, index))}
      </SepecialWrapper>
    </RowItem> : null}
    {item3 ? <RowItem>
      <NumberingText>#{get(item1, 'number', '')}</NumberingText>
      <ImageWrapper resizeMethod={'auto'} source={{ uri: get(item3, 'image', '') || 'https://img.pokemondb.net/artwork/bulbasaur.jpg' }} />
      <PokeText>{get(item3, 'name', '')}</PokeText>
      <SepecialWrapper >
        {type3.map((item, index) => renderAttacks(item, index))}
      </SepecialWrapper>
    </RowItem> : null}
  </RowWrapper >;
}

const formatedArray = (poke = []) => {
  const dataLength = poke.length;
  let size = 0;
  const formatedData = [];
  while (size < dataLength) {
    formatedData.push({
      item1: size > dataLength ? null : poke[size],
      item2: size + 1 > dataLength ? null : poke[size + 1],
      item3: size + 1 > dataLength ? null : poke[size + 2],
    });
    size += 3;
  }
  return formatedData;
}

const Home = props => {
  const loading = get(props, 'data.loading') && !get(props, 'data.viewer');
  const data = get(props, 'data.pokemons', []);
  const formatedData = formatedArray(data);
  console.log(formatedData);
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
        {loading ?
          <ActivityIndicator style={{ flex: 1, justifyContent: 'center', height: Dimensions.get('window').height }} />
          : <FlatList
            data={formatedData}
            renderItem={renderRow}
            keyExtractor={(item, index) => index.toString()}
          />
        }
      </MainScrollView >
    </ParallaxScrollView>
  );
};

export default Home;
