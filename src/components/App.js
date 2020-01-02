import React from 'react';
import Header from './Header';
import Repertoire from './Repertoire';
import OrderPanel from './OrderPanel';

class App extends React.Component {
    state = {};
  
    componentDidMount() {}
  
    render() {
      return (
        <div className="ui container">
          <Header />
          <Repertoire />
          <OrderPanel />
        </div>
      );
    }
  }
  
  export default App;
  
