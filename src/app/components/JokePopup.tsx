import { useEffect, useState } from "react";
import { JokeQA } from "../../../types";
import jokes from "../jokes";
import { RiCloseFill } from "react-icons/ri";

interface Props {
    onClose: () => void;
    key: number;
}

export default function JokePopup({ onClose }: Props) {

    const [jokeNumber, setJokeNumber] = useState('');
    const [joke, setJoke] = useState<JokeQA>();
    const [answerVisible, setAnswerVisible] = useState(false);

    const generateJoke = () => {
        const nJokes = Object.keys(jokes).length;
      
        const lastJoke = sessionStorage.getItem("joke");
        const prevJoke = sessionStorage.getItem("prevJoke");
      
        let match = true;
        let tries = 0;
        let randomIndex = 0;
      
        while (match && tries < 100) {
          tries++;
          randomIndex = Math.ceil(Math.random() * nJokes);
          const indexStr = String(randomIndex);
      
          // Ensure the new joke is not the same as the current or previous one
          if (indexStr !== lastJoke && indexStr !== prevJoke) {
            match = false;
            sessionStorage.setItem("prevJoke", lastJoke || "");
            sessionStorage.setItem("joke", indexStr);
            setJokeNumber(indexStr);
            setJoke(jokes[randomIndex]);
          }
        }
      };

    const answer = () => setAnswerVisible(true);


    useEffect(() => {
        generateJoke();
    }, [])


    return (
        <div className="popup joke-popup">
            <header className="joke-header">
                <span className="joke-number">Joke no. {jokeNumber}</span>
            </header>
            <div className="joke-body">
                <p className="joke-setup">{joke?.setup}</p>
                <p className={`joke-punchline ${answerVisible ? 'visible' : ''}`}>{joke?.punchline}</p>
            </div>
            <footer className="joke-footer">
                <button className="popup-button" id="jokeQA-answer" onClick={answer}>Answer</button>
                <div className="close-button" onClick={onClose}><RiCloseFill /></div>
            </footer>
        </div>
    );

}