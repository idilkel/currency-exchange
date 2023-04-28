import "./LogoComponent.css";

const LogoComponent = () => {
  return (
    <div className="logo-component-container">
      <img
        src={require("../../assets/icons8-currency-exchange-96.png")}
        alt="logo"
      />
      <p className="company-name">Currency Exchange Today</p>
    </div>
  );
};

export default LogoComponent;
