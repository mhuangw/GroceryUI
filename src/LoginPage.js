import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { MdOutlineLocalGroceryStore } from "react-icons/md";

const url = "https://cs6310-14.azurewebsites.net/Authentication/login";

function LoginPage() {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = () => {
    if (account === "George P. Burdell") {
      navigate("/EasterEgg");
      return;
    }

    if (account === "" || password === "") {
      alert("Please make sure all fields are filled in");
      return;
    }

    axios
      .get(url + "/" + account + "/" + password)
      .then((response) => {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("account", response.data.account);
        localStorage.setItem("privilege", response.data.privilege);
        navigate("/HomePage");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <MdOutlineLocalGroceryStore size={100} />
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

            <Button variant="secondary" onClick={() => login()}>
              Submit
            </Button>
          </Form>
        </div>
      </header>
    </div>
  );
}

export default LoginPage;
