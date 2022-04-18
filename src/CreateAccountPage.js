import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const url = "https://cs6310-14.azurewebsites.net/Authentication/make_account";

function CreateAccountPage() {
  const [account, setAccount] = useState("");
  const [privilege, setPrivilege] = useState(0);
  const [password, setPassword] = useState("");
  const [salt, setSalt] = useState("");
  const [auth, setAuth] = useState(true);

  const createAccount = () => {
    axios
      .post(url, {
        account: account,
        privilege: privilege,
        password: password,
        salt: salt,
        auth: auth,
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Enter a username and password to create an account: </p>
        <div>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Username"
                onChange={(e) => setAccount(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="secondary" onClick={() => createAccount()}>
              Submit
            </Button>
          </Form>
          <br />
          <Link to="/HomePage">
            <Button variant="secondary">Go Back</Button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default CreateAccountPage;
