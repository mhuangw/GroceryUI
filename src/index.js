import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import StoresPage from "./StoresPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ItemsPage from "./ItemsPage";
import PilotsPage from "./PilotsPage";
import DronesPage from "./DronesPage";
import CustomersPage from "./CustomersPage";
import OrdersPage from "./OrdersPage";
import MakeStorePage from "./MakeStorePage";
import SellItemPage from "./SellItemPage";
import MakePilotPage from "./MakePilotPage";
import MakeDronePage from "./MakeDronePage";
import FlyDronePage from "./FlyDronePage";
import MakeCustomerPage from "./MakeCustomerPage";
import StartOrderPage from "./StartOrderPage";
import RequestItemPage from "./RequestItemPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/StoresPage" element={<StoresPage />} />
        <Route path="/ItemsPage" element={<ItemsPage />} />
        <Route path="/PilotsPage" element={<PilotsPage />} />
        <Route path="/DronesPage" element={<DronesPage />} />
        <Route path="/CustomersPage" element={<CustomersPage />} />
        <Route path="/OrdersPage" element={<OrdersPage />} />
        <Route path="/MakeStorePage" element={<MakeStorePage />} />
        <Route path="/SellItemPage" element={<SellItemPage />} />
        <Route path="/MakePilotPage" element={<MakePilotPage />} />
        <Route path="/MakeDronePage" element={<MakeDronePage />} />
        <Route path="/FlyDronePage" element={<FlyDronePage />} />
        <Route path="/MakeCustomerPage" element={<MakeCustomerPage />} />
        <Route path="/StartOrderPage" element={<StartOrderPage />} />
        <Route path="/RequestItemPage" element={<RequestItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
