import React, { Component } from 'react';
import Navbar from './components/navbar.js';
import BuildCard from './components/buildCard.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      topStories: [],
      items: []
    };
  }

  componentDidMount() {
    let {topStories} = this.state
    if (topStories.length === 0) {
      fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then(res => res.json())
      .then(
        (result) => {
          let firstList = result.splice(0,30)
          this.setState({
            isLoaded: true,
            topStories: result,
            items: firstList
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  handleScroll = () => {
    let {topStories} = this.state
    let docHeight = document.body.clientHeight;
    let bottomEdge = window.innerHeight + window.pageYOffset;
    if (bottomEdge >= docHeight && topStories.length > 0) {
      this.addMoreStories();
    }
  }

  addMoreStories = () => {
    let {topStories} = this.state;
    this.setState(prevState => {
      return { items: [...prevState.items, ...topStories.splice(0, 30)] }
    })
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="main-container">Loading...</div>;
    } else {
      return (
        <div className="main-container">
          <Navbar />
          {items.map((item, i) => (
            <BuildCard key={item} id={item} rank={i+1}/>
          ))}
          <div id="end-of-feed"></div>
        </div>
      );
    }
  }
}

export default App;
