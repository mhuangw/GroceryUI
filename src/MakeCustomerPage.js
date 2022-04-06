import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function MakeCustomerPage() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control placeholder="Account ID" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control placeholder="First Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control placeholder="Last Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control placeholder="Phone Number" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control placeholder="Customer Rating" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control placeholder="Credits" />
            </Form.Group>
            <Button variant="secondary" type="submit">
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
