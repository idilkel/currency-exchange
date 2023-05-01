import axios from "axios";
import { changeLoading } from "./loadingReducer";
import { mockRateResponse, mockRateHistoryResponse } from "./mockData";

const initialState = {
  base: "USD",
  conversionRates: mockRateResponse,
  fromRate: "ILSRate",
  conversionRatesHistory: mockRateHistoryResponse,
};

export const reset = () => {
  return { type: "RESET" };
};

export const loadRates = (rates) => {
  return { type: "LOAD_RATES", payload: rates };
};

export const loadRatesHistory = (ratesHistory) => {
  return { type: "LOAD_RATES_HISTORY", payload: ratesHistory };
};

export const changeFromRates = (fromRate) => {
  return { type: "CHANGE_FROM_RATES", payload: fromRate };
};

export const ratesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_RATES":
      return {
        ...state,
        conversionRates: action.payload,
      };
    case "LOAD_RATES_HISTORY":
      return {
        ...state,
        conversionRatesHistory: action.payload,
      };
    case "CHANGE_FROM_RATES":
      return {
        ...state,
        fromRate: action.payload,
      };
    case "RESET":
      return { initialState };
    default:
      return state;
  }
};

//from mock data - not used
export const fetchRates = () => {
  return (dispatch, getState) => {
    console.log("fetching rates...");
    dispatch(changeLoading(true));
    dispatch(changeLoading(false));
    const rawRates = mockRateResponse.conversion_rates;
    dispatch(loadRates(rawRates));
    console.log(getState);
  };
};

export const fetchRates2 = () => {
  return (dispatch, getState) => {
    dispatch(changeLoading(true));
    let url =
      "https://v6.exchangerate-api.com/v6/dfd8989bd4df3484deddfe73/latest/USD";
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        console.log("fetching rates...");
        dispatch(changeLoading(false));
        const rawRates = res.data.conversion_rates;
        dispatch(loadRates(rawRates));
        console.log(getState);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};

export const fetchRatesHistory = (startDate, endDate) => {
  return (dispatch, getState) => {
    console.log("fetching rates history!!!...");
    dispatch(changeLoading(true));
    const headers = { apikey: "hUlbjiMLyVcaNRgjP8d2R1ydxyi3pUIJ" };
    let url = `https://api.apilayer.com/exchangerates_data/timeseries?start_date=${startDate}&end_date=${endDate}&base=USD`;
    axios
      .get(url, { headers })
      .then((res) => {
        console.log(res);
        dispatch(changeLoading(false));
        const rawRates = res.data.rates;
        dispatch(loadRatesHistory(rawRates));
        console.log(getState);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};
