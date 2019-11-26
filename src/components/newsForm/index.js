import React, { Component } from 'react';
import './newsForm.css';

export default class Form extends Component {
  state = { title: '', publisher: '', link: ''};

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state.title, this.state.publisher, this.state.link)
    this.setState({title:'',  publisher:'', link:''})
  }

  handleTitleChange = (e) => this.setState({title: e.target.value});
  handlePublisherChange = (e) => this.setState({ publisher: e.target.value});
  handleLinkChange = (e) => this.setState({link: e.target.value});

    render() {
        return (
          <form className="form bg-dark text-light">
          <h3>Submit a game review</h3>
          <div className="form-group">
              <input type="text"
                  className="form-control"
                  placeholder="Title"
                  value={this.state.title}
                  onChange={ this.handleTitleChange } />
          </div>
          <div className="form-group">
                <input type="text"
                    className="form-control"
                    placeholder="Publisher"
                    value={this.state.publisher}
                    onChange={ this.handlePublisherChange } />
            </div>
            <div className="form-group">
                <input type="text"
                className="form-control"
                placeholder="Link"
                value={this.state.link}
                onChange={ this.handleLinkChange } />
            </div>
            <button type="submit" className="btn btn-primary"
                onClick={this.handleSubmit}>Add
               </button>
        </form>
        );
    }
}