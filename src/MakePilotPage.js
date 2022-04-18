import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const url = "https://cs6310-14.azurewebsites.net/pilot/make_pilot";

function MakePilotPage() {
  const [account, setAccount] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [taxId, setTaxId] = useState("");
  const [licenseId, setLicenseId] = useState("");
  const [experienceLevel, setExperienceLevel] = useState(0);

  const makePilot = () => {
    axios
      .post(url, {
        account: account,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        taxId: taxId,
        licenseId: licenseId,
        experienceLevel: experienceLevel,
      })
      .then(() => {
        alert("Pilot added!");
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
                placeholder="Tax ID"
                onChange={(e) => setTaxId(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="License ID"
                onChange={(e) => setLicenseId(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Experience Level"
                onChange={(e) => setExperienceLevel(e.target.value)}
              />
            </Form.Group>
            <Button variant="secondary" onClick={() => makePilot()}>
              Submit
            </Button>
            <div style={{ marginTop: "20px" }}>
              <Link to="/PilotsPage">
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

export default MakePilotPage;
