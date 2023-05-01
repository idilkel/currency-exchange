import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line, Chart } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import "./LineChart.css";
import store from "../../redux/store";
import { changeFromRates } from "../../redux/ratesReducer";
import { mockRateHistoryResponse } from "../../redux/mockData";

let endDate = new Date();
let startDate = new Date();
startDate.setDate(startDate.getDate() - 7);
let startDay = startDate.getDate();
let startMonth = startDate.getMonth() + 1;
let startYear = startDate.getFullYear();
let endDay = endDate.getDate();
let endMonth = endDate.getMonth() + 1;
let endYear = endDate.getFullYear();
console.log("startDate: " + startDate + ", endDate: " + endDate);
console.log(
  startDay +
    "-" +
    startMonth +
    "-" +
    startYear +
    " - " +
    endDay +
    "-" +
    endMonth +
    "-" +
    endYear
);

const dateMinusDay = (days) => {
  // let endDate = new Date();  //with real data <------------------------------------------------------
  let endDate = new Date("April 30, 2023"); //to use the mock data
  endDate.setDate(endDate.getDate() - days);
  let day = endDate.getDate();
  let month = endDate.getMonth() + 1;
  let year = endDate.getFullYear();
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(
    2,
    "0"
  )}`;
};

// console.log(dateMinusDay(1));

// console.log(mockRateHistoryResponse.rates[dateMinusDay(1)]);

const LineChart = () => {
  const fromRate = useSelector((state) => state.rates.fromRate);
  const rateHistory = useSelector(
    (state) => state.rates.conversionRatesHistory
  );
  console.log(fromRate);

  //--------For responsive - Start ------------
  const dispatch = useDispatch();

  const changeSelectionFromRedux = (currentFrom) => {
    let current = currentFrom.substring(0, 3);
    console.log("LineChart changeSelectionFromRedux: " + current);
    return current;
  };

  changeSelectionFromRedux(fromRate);

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
        return;
    }
  };

  const selectForm = (
    <select
      className="select-responsive"
      name="selectedCurrency"
      id="selectedCurrency"
      value={changeSelectionFromRedux(fromRate)}
      onChange={handleSelectFrom}
    >
      <option value="ILS">ILS</option>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="GBP">GBP</option>
    </select>
  );
  //--------For responsive - End ------------

  const currency = fromRate.substring(0, 3);
  const rateByMinusDayByCurrency = (days, currency) => {
    // return rateHistory.rates[dateMinusDay(days)][currency];  //real data<--------------------------------------------------
    return mockRateHistoryResponse.rates[dateMinusDay(days)][currency];
  };

  console.log(rateByMinusDayByCurrency(0, "USD"));
  const rateData = [
    rateByMinusDayByCurrency(6, currency),
    rateByMinusDayByCurrency(5, currency),
    rateByMinusDayByCurrency(4, currency),
    rateByMinusDayByCurrency(3, currency),
    rateByMinusDayByCurrency(2, currency),
    rateByMinusDayByCurrency(1, currency),
    rateByMinusDayByCurrency(0, currency),
  ];

  const rateLabel = [
    dateMinusDay(6),
    dateMinusDay(5),
    dateMinusDay(4),
    dateMinusDay(3),
    dateMinusDay(2),
    dateMinusDay(1),
    dateMinusDay(0),
  ];

  const data = {
    labels: rateLabel,
    datasets: [
      {
        label: `Rates ${currency}/USD`,
        data: rateData, //each value corresponds to a label
        borderColor: ["blue"], //the line
        backgroundColor: ["blue"], //the area under the line
        pointBackgroundColor: "black", //datapoint
        pointBorderColor: "black", //datapoint
      },
    ],
  };

  const options = {
    title: { display: true, text: "Line Chart" },
    // scales: {
    //   yAxes: [
    //     {
    //       scaleLabel: {
    //         display: true,
    //         labelString: `ILS/USD`,
    //       },
    //       ticks: { min: 0, max: 6, stepSize: 1 },
    //     },
    //   ],
    // },
  };

  //even code from docs: https://react-chartjs-2.js.org/docs/working-with-datasets
  //TypeError: Cannot convert object to primitive value
  //http://localhost:3000/test
  return (
    <div className="lineChart-container">
      <div>{selectForm}</div>
      <Line className="LineChart" data={data} options={options} />
      {/*<Line
        datasetIdKey="id"
        data={{
          labels: rateLabel,
          datasets: [{ id: 1, label: `Rates ${currency}/USD`, data: rateData }],
        }}
      />*/}
    </div>
  );
};

export default LineChart;
