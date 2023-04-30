import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import RateComponent from "../RateComponent/RateComponent";
import { BsCurrencyDollar, BsCurrencyEuro } from "react-icons/bs";
import store from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { changeFromRates } from "../../redux/ratesReducer";
import { LinkContainer } from "react-router-bootstrap";
import { useState } from "react";

const NavBar = () => {
  let ILSRate = store.getState().rates.conversionRates.ILS;
  let USDRate = store.getState().rates.conversionRates.USD;
  let EURRate = store.getState().rates.conversionRates.EUR;
  let GBPRate = store.getState().rates.conversionRates.GBP;
  const rates = useSelector((state) => state.rates);
  const dispatch = useDispatch();
  let fromRate;
  console.log(rates.fromRate);

  switch (rates.fromRate) {
    case "ILSRate":
      fromRate = ILSRate;
      break;
    case "USDRate":
      fromRate = USDRate;
      break;
    case "EURRate":
      fromRate = EURRate;
      break;
    case "GBPRate":
      fromRate = GBPRate;
      break;
    default:
      fromRate = ILSRate;
  }

  console.log(fromRate);

  const changeSelectionFromRedux = (currentFrom) => {
    let current = currentFrom.substring(0, 3);
    console.log("NavBar changeSelectionFromRedux: " + current);
    return current;
  };

  changeSelectionFromRedux(rates.fromRate);

  const handleSelectFrom = (e) => {
    console.log(e.target.value);
    let fromCurrency = e.target.value;
    switch (fromCurrency) {
      case "ILS":
        dispatch(changeFromRates("ILSRate"));
        break;
      case "USD":
        dispatch(changeFromRates("USDRate"));
        console.log(store.getState());
        break;
      case "EUR":
        dispatch(changeFromRates("EURRate"));
        break;
      case "GBP":
        dispatch(changeFromRates("GBPRate"));
        break;
      default:
        fromRate = rates.fromRate;
    }
  };

  return (
    <Navbar variant="dark" bg="primary" expand="md" className="NavBar">
      <Container>
        <Navbar.Brand href="#home">Currency Exchange Rates</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Text>
              {" "}
              &nbsp;From:&nbsp;&nbsp;
              <select
                value={changeSelectionFromRedux(rates.fromRate)}
                onChange={handleSelectFrom}
              >
                <option value="ILS">ILS</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </Navbar.Text>
          </Nav>
          <Nav className="me-auto">
            <Navbar.Text>To:</Navbar.Text>
          </Nav>
          <Nav className="me-auto">
            <LinkContainer to="calculator/ILS">
              <Nav.Link>
                <img
                  src={require("../../assets/icons8-israel-48.png")}
                  alt="flag"
                />
                <RateComponent
                  currency="ILS"
                  rate={
                    fromRate
                      ? `${Number(
                          Math.round(fromRate / ILSRate + "e2") + "e-2"
                        ).toFixed(2)}`
                      : "--"
                  }
                />
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className="me-auto">
            <LinkContainer to="calculator/USD">
              <Nav.Link>
                <img
                  src={require("../../assets/icons8-usa-48.png")}
                  alt="flag"
                />
                <RateComponent
                  currency="USD"
                  rate={
                    fromRate
                      ? `${Number(
                          Math.round(fromRate / USDRate + "e2") + "e-2"
                        ).toFixed(2)}`
                      : "--"
                  }
                />
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className="me-auto">
            <LinkContainer to="calculator/EUR">
              <Nav.Link>
                <img
                  className="europe"
                  src={require("../../assets/icons8-flag-of-europe-48.png")}
                  alt="flag"
                />
                <RateComponent
                  currency="EUR"
                  rate={
                    fromRate
                      ? `${Number(
                          Math.round(fromRate / EURRate + "e2") + "e-2"
                        ).toFixed(2)}`
                      : "--"
                  }
                />
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className="me-auto">
            <LinkContainer to="calculator/GBP">
              <Nav.Link>
                <img
                  src={require("../../assets/icons8-great-britain-48.png")}
                  alt="flag"
                />
                <RateComponent
                  currency="GBP"
                  rate={
                    fromRate
                      ? `${Number(
                          Math.round(fromRate / GBPRate + "e2") + "e-2"
                        ).toFixed(2)}`
                      : "--"
                  }
                />
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;

//better rounding: rate={Number(Math.round(ILSRate / EURRate + "e2") + "e-2")} - doesn't provide 2 decimal places
//than rate={(ILSRate / EURRate).toFixed(2)}

//let from = rates.fromRate;
// switch (from) {
//   case "ILS":
//     fromRate = ILSRate;
//     console.log(fromRate);
//     break;
//   case "USD":
//     fromRate = USDRate;
//     console.log(fromRate);
//     break;
//   case "EUR":
//     fromRate = EURRate;
//     console.log(fromRate);
//     break;
//   case "GBP":
//     fromRate = GBPRate;
//     console.log(fromRate);
//     break;
//   default:
//     fromRate = ILSRate;
// }
