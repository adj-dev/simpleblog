import React from 'react';
import { Route, Router } from 'react-router-dom';

import history from '../history';
import Landing from './views/Landing';
import CreatePost from './posts/CreatePost';
import ListPosts from './posts/ListPosts';
import NavBar from './views/NavBar';
import About from './views/About';
import EditPost from './posts/EditPost';
import DeletePost from './posts/DeletePost';

const App = () => {
  return (
    <Router history={history}>
      <div className="container">
        <NavBar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/posts" component={ListPosts} />
        <Route path="/posts/create" component={CreatePost} />
        <Route path="/edit/:id" component={EditPost} />
        <Route path="/delete/:id" component={DeletePost} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
};

export default App;
