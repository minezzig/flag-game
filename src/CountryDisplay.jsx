import styles from "./CountryDisplay.module.css"

function CountryDisplay({ selectedCountry }) {
  console.log(selectedCountry);
  return (
    <div className={styles.container}>
      <img src={selectedCountry?.flags?.png} alt="secret flag" className={styles.flag}/>
    </div>
  );
}

export default CountryDisplay;
