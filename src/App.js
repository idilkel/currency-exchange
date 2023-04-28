import logo from "./logo.svg";
import "./App.css";
import RateComponent from "./components/RateComponent/RateComponent";
import NavBar from "./components/NavBar/NavBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRates, fetchRates2 } from "./redux/ratesReducer";
import LineChart from "./components/LineChart/LineChart";
import Footer from "./components/Footer/Footer";
import LogoComponent from "./components/LogoComponent/LogoComponent";
import Links from "./components/Links/Links";
import { Outlet } from "react-router-dom";
import Main from "./components/Main/Main";

function App() {
  const rates = useSelector((state) => state.rates);
  const dispatch = useDispatch();

  // Real rates:
  useEffect(() => {
    dispatch(fetchRates2());
  }, []);

  // //Mock Rates
  // useEffect(() => {
  //   dispatch(fetchRates());
  // }, []);

  return (
    <div className="App">
      <NavBar />
      <div className="logo-and-links">
        <LogoComponent />
        <Links />
      </div>

      <Main />
      <Footer />
    </div>
  );
}

export default App;

// return (
//   <div className="App">
//     <NavBar />
//     <div className="logo-and-links">
//       <LogoComponent />
//       <Links />
//     </div>

//     <LineChart />
//     <Footer />
//   </div>
// );
