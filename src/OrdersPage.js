import "./App.css";
import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function OrdersPage() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Link to="/StartOrderPage">
            <Button className="buttonStyle" variant="secondary" size="lg">
              Start Order
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/DisplayOrdersPage">
            <Button className="buttonStyle" variant="secondary" size="lg">
              Display Orders
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/RequestItemPage">
            <Button className="buttonStyle" variant="secondary" size="lg">
              Request Item
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/PurchaseOrderPage">
            <Button className="buttonStyle" variant="secondary" size="lg">
              Purchase Order
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/CancelOrderPage">
            <Button className="buttonStyle" variant="secondary" size="lg">
              Cancel Order
            </Button>
          </Link>
        </div>
        <div style={{ marginTop: "20px", fontSize: "large" }}>
          <Link to="/HomePage">
            <Button className="buttonStyle" variant="secondary" size="sm">
              Back to Home
            </Button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default OrdersPage;
