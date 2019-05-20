import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './App.css';
import './index.css';

import ListPosts from './components/Posts/ListPosts'
import PostDetail from './components/Posts/DetailPost'
import NotFound from './components/Posts/NotFound'

const App = () => {
  return (
    <div className="app">
    <Switch>
      <Route exact path="/" component={ListPosts} />
      <Route exact path="/category/:category" component={ListPosts} />
      <Route exact path="/category/:category/:id" component={PostDetail} />
      <Route component={NotFound} />
    </Switch>
    </div>
  )
};

export default App
