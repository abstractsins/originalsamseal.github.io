"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { File } from "../../types";
import JokePopup from "./components/JokePopup";

export default function Home() {
  const [randomPortrait, setRandomPortrait] = useState<File>('');
  const [randomNickname, setRandomNickname] = useState<string>('');
  const [randomFont, setRandomFont] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [jokePopupVisible, setJokePopupVisible] = useState(false);
  const [jokeKey, setJokeKey] = useState(0);



  const randomizeNickname = () => {
    const nicknames = [
      'sammySeal',
      'smokinSammySeal',
      'originalSamSeal',
      'samuelSealwall',
      'samuelSealworth',
      'samuelSealford',
      'samuelSealington',
      'sammySealkowski',
      'sammySealowitz',
      'sammySealberg',
      'sammySealkani',
      'sammySeal-Mart',
    ];

    let match = true;
    // let tries = 0;
    let randomIndex;

    while (match === true) {
      // tries++;
      // console.log('nickname tries', tries);
      randomIndex = Math.floor(Math.random() * nicknames.length);

      const currentNickname = sessionStorage.getItem('nickname');
      const pick = nicknames[randomIndex];

      if (pick != currentNickname) {
        match = false;
        sessionStorage.setItem('nickname', pick);
        setRandomNickname(pick);
      }
    }
  }

  const randomizeFont = () => {
    const fonts = [
      "'Capriola', sans-serif",
      "arial, sans-serif",
      "'Carattere', sans-serif",
      "'Caveat', sans-serif",
      "'Gluten', sans-serif",
      "'Lato', sans-serif",
      "'Pacifico', sans-serif",
      "'Courier-New', monospace",
      "'Trebuchet', sans-serif",
      "'Lucida Console', monospace"
    ];

    let match = true;
    // let tries = 0;
    let randomIndex;
    while (match === true) {
      // tries++;
      // console.log('font tries', tries);
      randomIndex = Math.floor(Math.random() * fonts.length);

      const currentFont = sessionStorage.getItem('font');
      const pick = fonts[randomIndex];

      if (pick != currentFont) {
        match = false;
        sessionStorage.setItem('font', pick);
        setRandomFont(pick);
      }
    }
  }

  const randomizePortrait = () => {
    const portraits = {
      portrait1: 'sammy1-2.png',
      portrait2: 'sammy2-2.png',
      portrait3: 'sammy3-2.png',
      portrait4: 'sammy4-2.png'
    }
    const portraitsArray = Object.values(portraits);

    let match = true;
    // let tries = 0;
    let randomIndex;
    while (match === true) {
      // tries++;
      // console.log('portrait tries', tries);
      randomIndex = Math.floor(Math.random() * portraitsArray.length);

      const currentPortrait = sessionStorage.getItem('portrait');
      const pick = portraitsArray[randomIndex];

      if (pick != currentPortrait) {
        match = false;
        sessionStorage.setItem('portrait', pick);
        setRandomPortrait(pick);
      }
    }
  }

  const randomizations = () => {
    randomizeNickname();
    randomizeFont();
    randomizePortrait();
  }


  const tellJoke = () => {
    if (jokePopupVisible) {
      setJokeKey((prev) => prev + 1);
      randomizations();
    } else {
      setJokePopupVisible(true);
      setJokeKey((prev) => prev + 1);
    }
  }

  const onPopupClose = () => {
    setJokePopupVisible(false);
    randomizations();
  }

  useEffect(() => {
    randomizations();
    setLoading(false);
  }, []);

  return (
    <div>
      {/* <!-- Splash Page --> */}
      {!loading &&
        <div className="splash">
          <header>
            <h1 id="nickname" style={{ fontFamily: randomFont }} className="title">{randomNickname}</h1>
          </header>
          <Image alt="randomized Sammy Seal portrait" id="sammy-portrait" src={`/${randomPortrait}`} width={450} height={400} />
        </div>
      }
      <div className="splash-buttons">

        {/* <!-- Joke Button --> */}
        <div className="round-button main-btn" id="joke-btn" onClick={tellJoke}>
          <span className="curved-text">Wanna hear a joke?</span>
        </div>

      </div>

      {jokePopupVisible && <JokePopup onClose={onPopupClose} key={jokeKey} />}

    </div>
  );
}
