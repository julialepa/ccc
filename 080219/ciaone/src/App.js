import React, { Component } from 'react';
import './App.css';
import { ApolloProvider } from 'react-apollo'
import ApolloClient from "apollo-boost";
import Utente from './component/utente'


const client = new ApolloClient({
  uri: "https://fakerql.com/graphql"
});

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      
    }
    
    

  }
  render() {
    return (
      <ApolloProvider client={client}>
        <Utente />
      </ApolloProvider>
    );
  }
}

export default App;



//input camp, button, send id