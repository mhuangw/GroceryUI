import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function MakeDronePage() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control placeholder="Store Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control placeholder="Drone ID" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control placeholder="Weight Capacity" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control placeholder="Remaining Deliveries" />
            </Form.Group>
            <Button variant="secondary" type="submit">
              Submit
            </Button>
            <div style={{ marginTop: "20px" }}>
              <Link to="/StoresPage">
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

export default MakeDronePage;
