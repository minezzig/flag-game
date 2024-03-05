import styles from "./CountryOptions.module.css";

function CountryOptions({
  countryOptions,
  selectedCountry,
  checkAnswer,
  guess,
}) {
  // display each country option
  // depending on correct/incorrect guess, color will be red/green
  // if they got it wrong, the correct answer will be green
  return (
    <div className={styles.container}>
      {countryOptions.map((country) => (
        <div 
          key={country.name.common}
          className={`${styles.option} ${
            guess === country &&
            styles[guess === selectedCountry ? "correct" : "incorrect"]
          }
            ${
              guess &&
              guess !== selectedCountry &&
              country === selectedCountry &&
              styles.correct
            }
          } ${guess && styles.disable}`}
          onClick={() => checkAnswer(country)}
        >
          {country.name.common}
          </div>
      ))}
    </div>
  );
}

export default CountryOptions;
