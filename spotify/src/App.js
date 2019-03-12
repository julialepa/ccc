import React, { Component } from 'react';
import './App.css';
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from 'react-apollo'
import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'



const authAfterware = new onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    for (let err of graphQLErrors){
      if (err.message === 'Unauthorized') { //after vieve eseguito alla fine della richiesta hhttp, in questo caso fa ONERROR e viene chiamato solo in caso di errore, se si torva il messaggio unauth allora mi reindirizza al liink di autenticazione (vedi sotto)
        window.open('http://10.50.65.15:4000/auth/connect', '_self', false)
      }
    }
  }
})

const link = new createHttpLink({ uri: 'http://10.50.65.15:4000/graphql', credentials: 'include' }) //metodo personalizzato di fare richieste graph, parametro credential include singifica che in ogni chiamata includi i cookie, dopo autenticazione non la devo piu rifare


const client = new ApolloClient({
  link: authAfterware.concat(link),  //after vieve eseguito alla fine della richiesta hhttp, in questo caso fa ONERROR e viene chiamato solo in caso di errore, 
  cache: new InMemoryCache() //
})


class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <ApolloProvider className="container" client={client}>
          <Body />
        </ApolloProvider>
        <Footer />
      </div>
    );
  }
}

export default App;
