import "./RateCalculator.css";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import { useSelector } from "react-redux";

const RateCalculator = () => {
  const currency = useParams().currency || "";
  const [amount, setAmount] = useState("");
  const rates = useSelector((state) => state.rates);
  const fromRate = rates.conversionRates[currency];
  console.log(currency + " " + fromRate);
  console.log(rates);
  const ILSRate = rates.conversionRates.ILS;
  const USDRate = rates.conversionRates.USD;
  const EURRate = rates.conversionRates.EUR;
  const GBPRate = rates.conversionRates.GBP;
  console.log(
    "Amount: " + amount + ", From: " + fromRate + ", To ILSRate: " + ILSRate
  );

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted: " + amount);
  };
  return (
    <div className="RateCalculator">
      <h2>RateCalculator</h2>
      <Form>
        <Form.Group className="mb-3" controlId="From">
          <Form.Label>From {currency}</Form.Label>
          <Form.Control
            type="search"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Form.Text className="text-muted">
            Please enter the amount in {currency} to be calculated
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submitHandler}>
          Submit
        </Button>
      </Form>
      <div>To: </div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1" style={{ width: "6%" }}>
          ILS
        </InputGroup.Text>
        <Form.Control
          placeholder={
            amount
              ? `${Number(
                  Math.round((amount * ILSRate) / fromRate + "e2") + "e-2"
                ).toFixed(2)}`
              : "ILS"
          }
          aria-label="ILS"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon2" style={{ width: "6%" }}>
          USD
        </InputGroup.Text>
        <Form.Control
          placeholder={
            amount
              ? `${Number(
                  Math.round((amount * USDRate) / fromRate + "e2") + "e-2"
                ).toFixed(2)}`
              : "USD"
          }
          aria-label="USD"
          aria-describedby="basic-addon2"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3" style={{ width: "6%" }}>
          EUR
        </InputGroup.Text>
        <Form.Control
          placeholder={
            amount
              ? `${Number(
                  Math.round((amount * EURRate) / fromRate + "e2") + "e-2"
                ).toFixed(2)}`
              : "EUR"
          }
          aria-label="EUR"
          aria-describedby="basic-addon3"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon4" style={{ width: "6%" }}>
          GBP
        </InputGroup.Text>
        <Form.Control
          placeholder={
            amount
              ? `${Number(
                  Math.round((amount * GBPRate) / fromRate + "e2") + "e-2"
                ).toFixed(2)}`
              : "GBP"
          }
          aria-label="GBP"
          aria-describedby="basic-addon4"
        />
      </InputGroup>
    </div>
  );
};

export default RateCalculator;

// value={amount ? (amount * ILSRate) / fromRate : ""}
// `${Number(
//   Math.round(fromRate / ILSRate + "e2") + "e-2"
// ).toFixed(2)}`
