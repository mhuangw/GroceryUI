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
import DisplayStoresPage from "./DisplayStoresPage";
import SellItemPage from "./SellItemPage";
import DisplayItemsPage from "./DisplayItemsPage";
import MakePilotPage from "./MakePilotPage";
import DisplayPilotsPage from "./DisplayPilotsPage";
import MakeDronePage from "./MakeDronePage";
import DisplayDronesPage from "./DisplayDronesPage";
import FlyDronePage from "./FlyDronePage";
import MakeCustomerPage from "./MakeCustomerPage";
import DisplayCustomersPage from "./DisplayCustomersPage";
import StartOrderPage from "./StartOrderPage";
import DisplayOrdersPage from "./DisplayOrdersPage";
import RequestItemPage from "./RequestItemPage";
import PurchaseOrderPage from "./PurchaseOrderPage";
import CancelOrderPage from "./CancelOrderPage";
import LoginPage from "./LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import ForbiddenPage from "./ForbiddenPage";
import EasterEgg from "./EasterEgg";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/HomePage" element={<ProtectedRoute />}>
          <Route path="/HomePage" element={<HomePage />} />
        </Route>
        <Route path="/StoresPage" element={<StoresPage />} />
        <Route path="/ItemsPage" element={<ItemsPage />} />
        <Route path="/PilotsPage" element={<PilotsPage />} />
        <Route path="/DronesPage" element={<DronesPage />} />
        <Route path="/CustomersPage" element={<CustomersPage />} />
        <Route path="/OrdersPage" element={<OrdersPage />} />
        <Route path="/MakeStorePage" element={<MakeStorePage />} />
        <Route path="/DisplayStoresPage" element={<DisplayStoresPage />} />
        <Route path="/SellItemPage" element={<SellItemPage />} />
        <Route path="/DisplayItemsPage" element={<DisplayItemsPage />} />
        <Route path="/MakePilotPage" element={<MakePilotPage />} />
        <Route path="/DisplayPilotsPage" element={<DisplayPilotsPage />} />
        <Route path="/MakeDronePage" element={<MakeDronePage />} />
        <Route path="/DisplayDronesPage" element={<DisplayDronesPage />} />
        <Route path="/FlyDronePage" element={<FlyDronePage />} />
        <Route path="/MakeCustomerPage" element={<MakeCustomerPage />} />
        <Route
          path="/DisplayCustomersPage"
          element={<DisplayCustomersPage />}
        />
        <Route path="/StartOrderPage" element={<StartOrderPage />} />
        <Route path="/DisplayOrdersPage" element={<DisplayOrdersPage />} />
        <Route path="/RequestItemPage" element={<RequestItemPage />} />
        <Route path="/PurchaseOrderPage" element={<PurchaseOrderPage />} />
        <Route path="/CancelOrderPage" element={<CancelOrderPage />} />
        <Route path="/ForbiddenPage" element={<ForbiddenPage />} />
        <Route path="/EasterEgg" element={<EasterEgg />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
