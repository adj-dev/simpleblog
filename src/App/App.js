import React from 'react';
import { Route, Router } from 'react-router-dom';
import history from '../history';
import Landing from '../components/Landing/Landing';
import CreatePost from '../components/CreatePost/CreatePost';
import ListPosts from '../components/ListPosts/ListPosts';
import NavBar from '../components/NavBar/NavBar';
import About from '../components/About/About';
import EditPost from '../components/EditPost/EditPost';
import DeletePost from '../components/DeletePost';

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
