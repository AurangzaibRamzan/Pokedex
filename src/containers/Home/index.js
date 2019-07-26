import React from 'react';
import { graphql } from 'react-apollo';

import HomeView from '../../components/Home';

import Pokemons from './queries';

const Home = props => {
  const { data } = props;
  return <HomeView data={data} />;
};

export default graphql(Pokemons)(Home);
