import axios from "axios";
import { changeLoading } from "./loadingReducer";

const initialState = {
  base: "USD",
  conversionRates: {},
  fromRate: "ILSRate",
};

export const reset = () => {
  return { type: "RESET" };
};

export const loadRates = (rates) => {
  return { type: "LOAD_RATES", payload: rates };
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

export const fetchRates = () => {
  return (dispatch, getState) => {
    console.log("fetching...");
    dispatch(changeLoading(true));
    dispatch(changeLoading(false));
    const rawRates = mockRateResponse.conversion_rates;
    dispatch(loadRates(rawRates));
    console.log(getState);
  };
};

export const fetchRates2 = () => {
  return (dispatch, getState) => {
    console.log("fetching...");
    dispatch(changeLoading(true));
    let url =
      "https://v6.exchangerate-api.com/v6/dfd8989bd4df3484deddfe73/latest/USD";
    axios
      .get(url)
      .then((res) => {
        console.log(res);
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

const mockRateResponse = {
  result: "success",
  documentation: "https://www.exchangerate-api.com/docs",
  terms_of_use: "https://www.exchangerate-api.com/terms",
  time_last_update_unix: 1682467201,
  time_last_update_utc: "Wed, 26 Apr 2023 00:00:01 +0000",
  time_next_update_unix: 1682553601,
  time_next_update_utc: "Thu, 27 Apr 2023 00:00:01 +0000",
  base_code: "USD",
  conversion_rates: {
    USD: 1,
    AED: 3.6725,
    AFN: 86.1903,
    ALL: 101.1037,
    AMD: 386.6684,
    ANG: 1.79,
    AOA: 512.0712,
    ARS: 220.4119,
    AUD: 1.5058,
    AWG: 1.79,
    AZN: 1.7,
    BAM: 1.7799,
    BBD: 2.0,
    BDT: 106.3733,
    BGN: 1.7793,
    BHD: 0.376,
    BIF: 2066.7964,
    BMD: 1.0,
    BND: 1.3379,
    BOB: 6.8983,
    BRL: 5.0606,
    BSD: 1.0,
    BTN: 81.9909,
    BWP: 13.1921,
    BYN: 2.7325,
    BZD: 2.0,
    CAD: 1.3608,
    CDF: 2036.4676,
    CHF: 0.8912,
    CLP: 814.2949,
    CNY: 6.9304,
    COP: 4467.7703,
    CRC: 533.6361,
    CUP: 24.0,
    CVE: 100.3479,
    CZK: 21.3704,
    DJF: 177.721,
    DKK: 6.7894,
    DOP: 54.5348,
    DZD: 135.6498,
    EGP: 30.9179,
    ERN: 15.0,
    ETB: 54.5307,
    EUR: 0.91,
    FJD: 2.216,
    FKP: 0.8054,
    FOK: 6.7894,
    GBP: 0.8054,
    GEL: 2.5045,
    GGP: 0.8054,
    GHS: 12.0081,
    GIP: 0.8054,
    GMD: 63.5738,
    GNF: 8542.9521,
    GTQ: 7.7945,
    GYD: 211.5829,
    HKD: 7.8501,
    HNL: 24.5365,
    HRK: 6.8569,
    HTG: 155.3786,
    HUF: 342.8759,
    IDR: 14901.2905,
    ILS: 3.642,
    IMP: 0.8054,
    INR: 82.013,
    IQD: 1320.1004,
    IRR: 41991.6659,
    ISK: 136.3421,
    JEP: 0.8054,
    JMD: 152.7762,
    JOD: 0.709,
    JPY: 133.8211,
    KES: 135.5549,
    KGS: 87.6092,
    KHR: 4078.9818,
    KID: 1.5058,
    KMF: 447.7209,
    KRW: 1338.846,
    KWD: 0.3063,
    KYD: 0.8333,
    KZT: 454.3298,
    LAK: 17188.7384,
    LBP: 15000.0,
    LKR: 321.9634,
    LRD: 163.4092,
    LSL: 18.3283,
    LYD: 4.7695,
    MAD: 10.1245,
    MDL: 17.9942,
    MGA: 4402.7163,
    MKD: 55.9646,
    MMK: 2097.8246,
    MNT: 3491.914,
    MOP: 8.0854,
    MRU: 34.327,
    MUR: 44.7978,
    MVR: 15.4177,
    MWK: 1036.1732,
    MXN: 18.0508,
    MYR: 4.4458,
    MZN: 63.8638,
    NAD: 18.3283,
    NGN: 459.4044,
    NIO: 36.5515,
    NOK: 10.6475,
    NPR: 131.1854,
    NZD: 1.6265,
    OMR: 0.3845,
    PAB: 1.0,
    PEN: 3.7603,
    PGK: 3.526,
    PHP: 55.5981,
    PKR: 279.4315,
    PLN: 4.1765,
    PYG: 7147.1005,
    QAR: 3.64,
    RON: 4.4908,
    RSD: 106.7038,
    RUB: 81.4484,
    RWF: 1183.8168,
    SAR: 3.75,
    SBD: 8.3599,
    SCR: 13.128,
    SDG: 586.0826,
    SEK: 10.3037,
    SGD: 1.3379,
    SHP: 0.8054,
    SLE: 22.6229,
    SLL: 22622.9482,
    SOS: 568.5321,
    SRD: 36.8642,
    SSP: 884.6415,
    STN: 22.2965,
    SYP: 2515.7131,
    SZL: 18.3283,
    THB: 34.3719,
    TJS: 10.9041,
    TMT: 3.5,
    TND: 3.0439,
    TOP: 2.3311,
    TRY: 19.4306,
    TTD: 6.7778,
    TVD: 1.5058,
    TWD: 30.6983,
    TZS: 2348.5662,
    UAH: 36.9257,
    UGX: 3749.1728,
    UYU: 38.8986,
    UZS: 11393.48,
    VES: 24.6533,
    VND: 23480.7664,
    VUV: 117.9779,
    WST: 2.7327,
    XAF: 596.9611,
    XCD: 2.7,
    XDR: 0.7393,
    XOF: 596.9611,
    XPF: 108.5994,
    YER: 250.6731,
    ZAR: 18.3277,
    ZMW: 17.6546,
    ZWL: 1010.3569,
  },
};
