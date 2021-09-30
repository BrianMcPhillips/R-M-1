import React, { Component } from 'react';
import Item from './Item/Item';

const URL = process.env.REACT_APP_URL;
export default class ListPage extends Component {
  state = {
    characterData: []
  }
  
  componentDidMount = () => {
    // fetchCharacters();
    fetch(`${URL}/api/character`)
      .then(res => res.json())
      .then(characters => this.setState({ characterData: characters.results }));
  }
  render() {
    const { characterData } = this.state;
    return (
      <div>
        {
          characterData.map(character => 
            <Item key={character.id + character.name} data={character}/>
          )
        }
      </div>
    );
  }
}
