import styles from "./CountryDisplay.module.css"

function CountryDisplay({ selectedCountry }) {

  return (
    <div className={styles.container}>
      <img src={selectedCountry?.flags?.svg} alt="secret flag" className={styles.flag}/>
    </div>
  );
}

export default CountryDisplay;
