import React, { Component } from 'react';
import NewsList from './components/newsList/';
import Form from './components/newsForm/';
//import api from './dataStore/stubAPI';
import * as api from './api';

import _ from 'lodash';
import "./App.css";

export default class App extends Component {   

  state = {posts: [{}]};

  componentDidMount() {
      api.getAll().then(resp => {
          this.setState({
              posts: resp.posts
          });
      }).catch(console.error);
  };

    /*addNewsItem = (title,  publisher, link) => {
        api.add(title,  publisher, link);
        this.setState({});
    };
    */

    addNewsItem = (title, link) => {
      api.add(title,link)
      .then(resp => {
                    const newPost = {"id":resp.id,"title":title,"link":link,"upvotes":0, "comments":[]};
                    this.setState({posts: this.state.posts.concat([newPost])});
      })
    };
    
    /*
    incrementUpvote = (id) => {
        api.upvote(id);
        this.setState({});
    };
    */
   
    incrementUpvote = (id) => {
      api.upvote(id).then(resp=> {
             var upvotedPost = _.find(this.state.posts, post=>post.id == id);
             upvotedPost.upvotes++;  
             this.setState({})
           }) ;
    };

    removeNewsItem = id => {
      api.removePost(id);
      this.setState({});   
     };
    
    render() {
      /*  let posts =  _.sortBy(api.getAll(), post => -post.upvotes);
        return (
            <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 ">
                <Form handleAdd={this.addNewsItem} />
              </div>
              <div className="col-md-8">
                <NewsList posts={posts} upvoteHandler={this.incrementUpvote} removeHandler={this.removeNewsItem} />
              </div>
            </div>
          </div>
        );
    }
    */
    const posts = _.sortBy(this.state.posts, post => post.upvotes);
    return (
      <div className="container">
          <div className="row">
              <div className="col-md-9 col-md-offset-1">
                  <NewsList posts={posts} 
                  upvoteHandler={this.incrementUpvote} />
              </div>
          </div>
          <div className="row">
              <div className="col-md-9 col-md-offset-1">
                  <Form handleAdd={ this.addNewsItem } />
              </div>
          </div>
      </div>
  );
}
}
