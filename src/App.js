import React, {Component} from 'react';
import Posts from './components/Posts';
import Postform from './components/Postform';
import { Container } from '@material-ui/core';
import { Provider } from 'react-redux';
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Container fixed>        
        <div>      
          <Postform />
          <hr />
          <Posts />      
        </div>
      </Container>
      </Provider>
    );
  }
}

export default App;
