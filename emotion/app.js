import React, { Component } from 'react';
import styled from './emotion-with-key-nonce';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    <AppStyle>
      <div>
        app
      </div>
    </AppStyle>

  }
}

const AppStyle = style('div')`
  background-color: #333;
`;