import React, { Component } from 'react';
import NewsList from './components/newsList/';
import Form from './components/newsForm/';
import api from './dataStore/stubAPI';

import _ from 'lodash';

export default class App extends Component {   

    addNewsItem = (title,  publisher, link) => {
        api.add(title,  publisher, link);
        this.setState({});
    };
    
    incrementUpvote = (id) => {
        api.upvote(id);
        this.setState({});
    };

    removeNewsItem = id => {
      api.removePost(id);
      this.setState({});   
     };
    
    render() {
        let posts =  _.sortBy(api.getAll(), post => -post.upvotes);
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
}
