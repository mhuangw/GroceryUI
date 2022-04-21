import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./AuthProvider";

const url = "https://cs6310-14.azurewebsites.net/Authentication/login";

function LoginPage() {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { login } = useAuth();

  const handleLogin = () => {
    login(account, password).then(() => {
      navigate("/HomePage");
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to the Grocery Express Delivery Service!</p>
        <p>Enter your credentials to begin: </p>
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
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="secondary" onClick={() => handleLogin()}>
              Log In
            </Button>
          </Form>
        </div>
      </header>
    </div>
  );
}

export default LoginPage;
