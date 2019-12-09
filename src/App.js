import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import store from './store';
import Layout from './components/layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

const client = new ApolloClient({
  uri: 'http://robust-restful-graphql-laravel.herokuapp.com/graphql'
});
class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Layout/>
        </ApolloProvider>
      </Provider>
    )

      

    
  }
}
export default App;
