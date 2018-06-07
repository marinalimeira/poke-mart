import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from '../node_modules/react-apollo';
import { client } from './apollo';
import { ListStorage } from './components/ListStorage';
import { ListMartItems } from './components/ListMartItems';
import { ItemQuantity } from './components/ItemQuantity';
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={ListStorage} />
      <Route path="/buy/:item" component={ItemQuantity} />
      <Route path="/listItems" component={ListMartItems} />
    </div>
  </Router>
);


const App = () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

ReactDOM.render(<App /> , document.getElementById('root')); registerServiceWorker();