import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const url = "https://cs6310-14.azurewebsites.net/customer/make_customer";

function MakeCustomerPage() {
  const [account, setAccount] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [rating, setRating] = useState("");
  const [credit, setCredit] = useState("");

  const makeCustomer = () => {
    axios
      .post(url, {
        account: account,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        rating: rating,
        credit: credit,
      })
      .then(() => {
        alert("Customer added!");
        document.location.reload();
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Account ID"
                onChange={(e) => setAccount(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Phone Number"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Customer Rating"
                onChange={(e) => setRating(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Credits"
                onChange={(e) => setCredit(e.target.value)}
              />
            </Form.Group>
            <Button variant="secondary" onClick={() => makeCustomer()}>
              Submit
            </Button>
            <div style={{ marginTop: "20px" }}>
              <Link to="/CustomersPage">
                <Button className="buttonStyle" variant="secondary" size="sm">
                  Go Back
                </Button>
              </Link>
            </div>
          </Form>
        </div>
      </header>
    </div>
  );
}

export default MakeCustomerPage;
