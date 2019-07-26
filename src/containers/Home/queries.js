
import gql from 'graphql-tag';

const Pokemons = gql`
query{
  pokemons(first: 24) {
    id
    number
    name
    types
    attacks {
      special {
        name
        type
        damage
      }
    }
    image
    evolutions {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      attacks {
        fast {
          name
          type
          damage
        }
      }
    }
  }
}
`;

export default Pokemons;
