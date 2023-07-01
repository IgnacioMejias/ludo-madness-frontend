import "./Instructions.css"
import React, { useEffect, useRef } from 'react';
import Slider from "./Slider";
import boardImage from './../assets/board.jpg';
import p2Image from './../assets/2p.png';
import p4Image from './../assets/4p.png';


const Instructions = () => {
  const observer = useRef(null);
  const instructions = [
    ['The Equipment', 'Ludo consists of a square board with four different colored bases in each' + 
    'corner. The first colored space outside of each base is the start position. A path leads' + 
    'clockwise around the board returning to a path with the same color as the base, then to' + 
    'the home column, which leads to the center home triangle.' + 
    'There are four different colored sets of playing pieces that start off in their matching' + 
    'bases. Each set consists of 4 playing pieces. The included die is used to govern the movement of the pieces.'],

    ['Gameplay', '2 to 4 players begin by placing their respective pieces in their bases. Each takes' +
    ' turns throwing the die, and the player with the highest roll plays first. The players to the' + 
    ' left follow in turn going clockwise. On each player’s turn, the player rolls the die to determine' + 
    ' a move. The goal of the game is to move all four of the player’s pieces clockwise once around the' + 
    ' board, up the home column, and into the home triangle.'],
    
    ['Movement', 'To begin, a player must roll a six to move a piece out of the base and onto the start' + 
    ' position. That piece is then in play. The player cannot make any other moves until at least one' + 
    ' piece is in play. If a player has a piece or pieces in play, they can move any one of their pieces' + 
    ' 1 to 6 spaces along the path according to the number they roll.'],

    ['Rules of the 6’s.', 'If a six is rolled, the player can choose to either move a piece out of his' + 
    ' base onto the start position or move a piece that is in play.' +
    'Anytime a six is rolled, the player gets an extra roll after his move.' +
    'If a six is rolled three times in a row, the player loses his turn.'],
    ];
  const colours = [
    ["red", "rgb(227, 90, 90)"], 
    ["yellow", "rgb(255, 255, 97)"], 
    ["green", "rgb(74, 201, 74)"], 
    ["blue", "rgb(82, 82, 250)"],
  ];

  const containerStyles = {
    width: "1300px",
    height: "700px",
    margin: "0 auto",
  }

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.current.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.current.unobserve(el));
      observer.current.disconnect();
    };
  }, []);
  
  return (
    <>
      <nav className='nav-home'>
          <a href='/home'> HOME </a>
          <a href='/aboutus'> ABOUT US</a>
      </nav>
      <section className="hidden">
        <h1 className="colorful-title">
            <span className="green">I</span>
            <span className="red">N</span>
            <span className="blue">S</span>
            <span className="yellow">T</span>
            <span className="green">R</span>
            <span className="red">U</span>
            <span className="blue">C</span>
            <span className="yellow">T</span>
            <span className="green">I</span>
            <span className="red">O</span>
            <span className="blue">N</span>
            <span className="yellow">S</span>
        </h1>
      </section>

      <section className="hidden">
        <div style={containerStyles}>
            <Slider 
                instructions={instructions}
                colours={colours} 
            />
        </div>
      </section>
      <section className="hidden">
        <h2 className="colorful-title">
            <span className="green">T</span>
            <span className="red">H</span>
            <span className="blue">E</span>
            <span> </span>
            <span className="green">B</span>
            <span className="red">O</span>
            <span className="blue">A</span>
            <span className="yellow">R</span>
            <span className="green">D</span>
        </h2>
        <img src={boardImage}></img>
      </section>

      <section className="hidden">
        <h2 className="colorful-title">
            <span className="green">P</span>
            <span className="red">L</span>
            <span className="blue">A</span>
            <span className="yellow">Y</span>
            <span> </span>
            <span className="green">M</span>
            <span className="red">O</span>
            <span className="blue">D</span>
            <span className="yellow">E</span>
            <span className="green">S</span>
        </h2>
        <div className="logos">
            <div className="logo hidden">
                <img src={p2Image}></img>
            </div>
            <div className="logo hidden">
                <img src={p4Image}></img>
            </div>
        </div>
        <div className="logo-text">
            <div className="hidden">
                <p>2 Players</p>
            </div>
            <div className="hidden">
                <p>4 Players</p>
            </div>
        </div>
      </section>
    </>
  );
};

export default Instructions;