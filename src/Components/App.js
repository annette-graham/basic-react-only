import React, { Component } from 'react';

import '../App.css';

import Article from './Article'
import Footer from './Layout/Footer'
import Header from './Layout/Header'


class App extends Component {
  constructor() {
    super()
    this.state = {
      title: 'Hello People'
    }
  }

changeTitle(title) {
  this.setState({title})
}


  render() {
    const articles = [
      'Article',
      'Another one',
      'Oh blimey, here\'s another',
      'Aaaand stop'
    ].map((title, i) => <Article key={i} title={title}/> )


    return (
      <div className="App">
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
        {articles}
        <Footer />
      </div>
    );
  }
}

export default App;
