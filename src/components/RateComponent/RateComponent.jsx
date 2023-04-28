import "./RateComponent.css";
import {
  BsCurrencyDollar,
  BsCurrencyEuro,
  BsCurrencyPound,
} from "react-icons/bs";

const RateComponent = ({ currency, rate }) => {
  const currencyIcon = (currency) => {
    switch (currency) {
      case "USD":
        return <BsCurrencyDollar />;
      case "EUR":
        return <BsCurrencyEuro />;
      case "GBP":
        return <BsCurrencyPound />;
      case "ILS":
        return "ILS";
      default:
        return "---";
    }
  };

  return (
    <div className="RateComponent">
      {currencyIcon(currency)} {rate}
    </div>
  );
};

export default RateComponent;

// <img src={require("../../assets/icons8-usa-48.png")} alt="flag" /> - working

// const usa = "../../assets/icons8-usa-48.png";
// <img src={require(`${usa}`)} alt="flag" /> - not working
