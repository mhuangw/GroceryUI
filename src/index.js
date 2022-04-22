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
import AdminRoute from "./AdminRoute";
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
        <Route path="/StoresPage" element={<AdminRoute />}>
          <Route path="/StoresPage" element={<StoresPage />} />
        </Route>
        <Route path="/ItemsPage" element={<AdminRoute />}>
          <Route path="/ItemsPage" element={<ItemsPage />} />
        </Route>
        <Route path="/PilotsPage" element={<AdminRoute />}>
          <Route path="/PilotsPage" element={<PilotsPage />} />
        </Route>
        <Route path="/DronesPage" element={<AdminRoute />}>
          <Route path="/DronesPage" element={<DronesPage />} />
        </Route>
        <Route path="/CustomersPage" element={<AdminRoute />}>
          <Route path="/CustomersPage" element={<CustomersPage />} />
        </Route>
        <Route path="/OrdersPage" element={<OrdersPage />} />

        <Route path="/MakeStorePage" element={<AdminRoute />}>
          <Route path="/MakeStorePage" element={<MakeStorePage />} />
        </Route>

        <Route path="/DisplayStoresPage" element={<AdminRoute />}>
          <Route path="/DisplayStoresPage" element={<DisplayStoresPage />} />
        </Route>

        <Route path="/SellItemPage" element={<AdminRoute />}>
          <Route path="/SellItemPage" element={<SellItemPage />} />
        </Route>

        <Route path="/DisplayItemsPage" element={<AdminRoute />}>
          <Route path="/DisplayItemsPage" element={<DisplayItemsPage />} />
        </Route>

        <Route path="/MakePilotPage" element={<AdminRoute />}>
          <Route path="/MakePilotPage" element={<MakePilotPage />} />
        </Route>

        <Route path="/DisplayPilotsPage" element={<AdminRoute />}>
          <Route path="/DisplayPilotsPage" element={<DisplayPilotsPage />} />
        </Route>

        <Route path="/MakeDronePage" element={<AdminRoute />}>
          <Route path="/MakeDronePage" element={<MakeDronePage />} />
        </Route>

        <Route path="/DisplayDronesPage" element={<AdminRoute />}>
          <Route path="/DisplayDronesPage" element={<DisplayDronesPage />} />
        </Route>

        <Route path="/FlyDronePage" element={<AdminRoute />}>
          <Route path="/FlyDronePage" element={<FlyDronePage />} />
        </Route>

        <Route path="/MakeCustomerPage" element={<AdminRoute />}>
          <Route path="/MakeCustomerPage" element={<MakeCustomerPage />} />
        </Route>

        <Route path="/DisplayCustomersPage" element={<AdminRoute />}>
          <Route
            path="/DisplayCustomersPage"
            element={<DisplayCustomersPage />}
          />
        </Route>

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
