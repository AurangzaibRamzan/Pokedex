import styled from 'styled-components/native';

import { Platform } from 'react-native';

export const TitleWrapper = styled.View`
  height: 200;
  flex: 1; 
  margin-Left: 16;
  justify-Content: center;
`;
export const TextWrapper = styled.Text`
 font-Weight: ${Platform.OS === 'android' ? 'bold' : 700};
`;

export const TitleText = styled(TextWrapper)`
  font-Size: 14; 
  font-Style: italic;
  color: #fff;
`;

export const MainScrollView = styled.View`
  width: 100%;
  background-Color: #F4F7FA;
  border-Radius: 8;
  paddingHorizontal: 8;
  padding-Top: 4;
`;

export const RowWrapper = styled.View`
  flexDirection: row;
  marginTop: 4;
`;

export const RowItem = styled.View`
  width: 33%;
  height: 112;
  background-Color: white;
  border-Radius: 8;
  margin-Right: 4;
  paddingVertical: 6;
  paddingHorizontal: 8;
`;

export const NumberingText = styled.Text`
  color: #7E94B3;
  fontSize: 12;
`;

export const ImageWrapper = styled.Image`
  height: 48; 
  width: 48;
  alignSelf: center;
`;

export const PokeText = styled.Text`
  fontSize: 14; 
  color: #1D3962; 
  alignSelf: center;
`;

export const SepecialWrapper = styled.View`
  flexDirection: row; 
  alignSelf: center;
`;

export const AttributeWrapper = styled.Text`
  fontSize: 10;
  paddingHorizontal: 5;
  backgroundColor: ${props => props.color || 'green'};
  borderRadius: 5; 
  color: #fff;
  marginHorizontal: 2;
`;