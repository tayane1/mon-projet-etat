import React, { Component } from 'react';
import './App.css';
import AngeImage from "./asset/Ange.jpg";

class App extends Component {
  state = {
    personne: {
      fullName: 'TIAN Bi',
      bio: 'Bio de TIAN Bi',
      imgSrc: AngeImage,
      profession: 'Développeur'
    },
    show: false,
    elapsedTime: 0
  };

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        elapsedTime: prevState.elapsedTime + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.personne;
    const { show, elapsedTime } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Show</button>
        {show && (
          <div>
            <h1>{fullName}</h1>
            <img src={imgSrc} alt={fullName} style={{width: "250px"}} />
            <p>{bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Elapsed Time: {elapsedTime} seconds</p>
      </div>
    );
  }
}

export default App;
