import { Route, Routes } from "react-router-dom";
import Header from "../header/header";
import MainPage from "../mainPage/MainPage";
import ServicesPrices from "../servicesPrices/ServicesPrices";
const InfoRoadMap = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/services-prices" element={<ServicesPrices />}></Route>
      </Routes>
    </div>
  );
};

export default InfoRoadMap;
