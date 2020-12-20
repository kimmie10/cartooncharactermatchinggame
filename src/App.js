//need nav with app name, instructions, and score/top score in a container. the score must count up each clicked image that has not already been clicked and if image is already click not increment. Top score must be the highest score from each game played. Should be able to compare scores from each game and choose the highest score.

//also in header nice jumbotron or hero with app name and more specific instructions on how to play

//cards with 12 cartoon character images this is where the game is played, they must be clickable in a way to add to current game score

//footer with shortened game name and react logo




// shuffle image

// keep track of which image isClicked

// clickedimg

// and notclickedimg


import React, { Component } from 'react';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import cartoonChar from './char.json'
import Image from './components/Image/image'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      topScore: 0,
      maxScore: 12,
      msg: "Click an image to begin!",
      msgClass: "",
      characters: cartoonChar
    };
  }

  handleClick = (id) => {
    this.state.characters.map((character) => {
      if (character.id === id && character.isClicked === false) {
        character.isClicked = true;
        this.setState({ score: this.state.score + 1, msg: "You guessed correctly!" })
          //this.shuffleCharacters();

      } else if (character.id === id && character.isClicked === true) {
        this.setState({ score: 0, topScore: 0, msg: "You guessed incorrectly!" })
        // this.shuffleCharacters();
      }
    });
  }

  win = () => {
    if (this.state.score === this.state.maxScore) {
      this.setState({ score: this.statescore + 1, msg: "You Win!", msgClass: "win" })
    }
  }

  shuffle = (array) => {
    let index = 0,
      temp,
      randomIndex;

    for (index = array.length - 1; index > 0; index -= 1) {
      randomIndex = Math.floor(Math.random() * (index + 1));
      temp = array[index];
      array[index] = array[randomIndex];
      array[randomIndex] = temp;
    }

    return array;
  }

  reset = (currentCharacters) => {
    if (this.state.score + 1 === this.state.maxScore) {
      this.setState({ score: 0, topScore: 0 })
      const updateCharacters = currentCharacters.map(char => (true) ? { ...char, isClicked: false } : char)
      return updateCharacters
    } else {
      return currentCharacters
    }
  }

  shuffleCharacters = (name) => {
    let reset = false;
    const characters = this.state.characters.map(char => {
      if (char.name === name) {
        if (char.isClicked === false) {
          this.handleClick()
        } else {
          reset = true
        }
      }
      return char;
    })

    if (reset) {
      this.setState({
        characters: this.shuffle(this.handleClick()),
        msgClass: "incorrect"
      })

    } else {
      this.setState({ characters: this.shuffle(this.reset(characters)) })
    }
  }

  render() {
    return (
      <div className="App">
        <Nav
          score={this.state.score}
          topScore={this.state.topScore}
          msg={this.state.msg}
          msgClass={this.state.msgClass}
        />
        <Header />

        <div className="container">
          {this.state.characters.map((oneChar) =>
            <Image
              image={oneChar.image}
              name={oneChar.name}
              key={oneChar.id}
              onClick={this.handleClick}
              id={oneChar.id}
            />
          )}

        </div>
        <Footer />

      </div>
    );
  }
}

export default App;