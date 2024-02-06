import { useEffect, useState } from "react";
import styles from "./App.module.css";
import CountryDisplay from "./CountryDisplay";
import CountryOptions from "./CountryOptions";
import GameOver from "./GameOver";
import { getRandomIndex } from "./utils/utils";
import Score from "./Score";

function App() {
  const MAX_LIVES = 5;
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});
  const [countryOptions, setCountryOptions] = useState([]);
  const [score, setScore] = useState({ points: 0, lives: MAX_LIVES });
  const [guess, setGuess] = useState(null);
  const [message, setMessage] = useState("Choose a country\n ");

  // load API
  useEffect(() => {
    async function getCountries() {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
      getCountryOptions(data);
    }

    getCountries();
  }, []);

  // choose 5 random countries as well as select one of them to be the main flag.
  const getCountryOptions = (countries) => {
    let list = [];
    while (list.length < 5) {
      const randomCountry = countries[getRandomIndex(countries)];
      if (!list.includes(randomCountry)) list.push(randomCountry);
    }

    setCountryOptions(list);
    setSelectedCountry(list[getRandomIndex(list)]);
  };

  //check to see if answer is correct
  const checkAnswer = (country) => {
    setGuess(country);
    if (country === selectedCountry) {
      setMessage(
        `You guessed correctly, this is\n ${selectedCountry.name.common}`
      );
      setScore((prev) => ({ points: prev.points + 1, lives: prev.lives }));
    } else {
      setMessage(`Incorrect, this country is\n ${selectedCountry.name.common}`);
      setScore((prev) => ({ points: prev.points, lives: prev.lives - 1 }));
    }
  };

  const newRound = () => {
    setMessage("Choose a country\n ");
    setGuess(null);
    getCountryOptions(countries);
  };

  const newGame = () => {
    setScore({ points: 0, lives: MAX_LIVES });
    newRound();
  };

  return (
    <div className={styles.card}>
      {score.lives === 0 ? (
        <GameOver score={score} newGame={newGame} />
      ) : (
        <div className={styles.container}>
          <h1>IDENTIFY THE FLAG</h1>
          <Score score={score} MAX_LIVES={MAX_LIVES} />
          <CountryDisplay selectedCountry={selectedCountry} />
          <div className={styles.messageContainer}>{message}</div> {/* add a message component that uses correct state vs. message */}
          <CountryOptions
            countryOptions={countryOptions}
            selectedCountry={selectedCountry}
            checkAnswer={checkAnswer}
            guess={guess}
          />
          <button
            className={`${styles.button} ${!guess && styles["hidden"]}`}
            onClick={newRound}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
