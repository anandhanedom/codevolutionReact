import React, { Component } from 'react';
import './App.css';

import firebase from './firebase.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: '',
      items: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const itemsRef = firebase.database().ref('items');

    const item = {
      title: this.state.currentItem,
      user: this.state.username,
    };

    itemsRef.push(item);

    this.setState({
      currentItem: '',
      username: '',
    });
  };

  componentDidMount() {
    const itemsRef = firebase.database().ref('items');

    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();

      // This value automatically fires on two occassions:

      // Any time a new item is added or removed from our items reference inside of our database
      // The first time the event listener is attached

      let newState = [];

      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user,
        });
      }

      this.setState({
        items: newState,
      });
    });
  }

  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }

  render() {
    return (
      <div className="app">
        <header>
          <div className="wrapper">
            <h1>Checklist</h1>
          </div>
        </header>
        <div className="container">
          <section className="add-item">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder="What's your name?"
                onChange={this.handleChange}
                value={this.state.username}
              />
              <input
                type="text"
                name="currentItem"
                placeholder="What are you bringing?"
                onChange={this.handleChange}
                value={this.state.currentItem}
              />
              <button>Add Item</button>
            </form>
          </section>
          <section className="display-item">
            <div className="wrapper">
              <ul>
                {this.state.items.map((item) => {
                  return (
                    <li key={item.id}>
                      <h3>{item.title}</h3>
                      <p>Brought by : {item.user}</p>
                      <button onClick={() => this.removeItem(item.id)}>
                        Remove Item
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default App;
