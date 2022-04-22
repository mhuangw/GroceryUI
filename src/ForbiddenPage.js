import "./App.css";
import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { BsFillFileXFill } from "react-icons/bs";

const ForbiddenPage = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <BsFillFileXFill size={100} />
        <div style={{ marginTop: "20px" }}>
          <p>You do not have the required privileges to access this page. </p>
          <p>
            Please select the button below to return to the previous screen.
          </p>
        </div>
        <div style={{ marginTop: "20px", fontSize: "large" }}>
          <Button
            className="buttonStyle"
            variant="secondary"
            size="sm"
            onClick={() => navigate(-1)}
          >
            Go Back
          </Button>
        </div>
      </header>
    </div>
  );
};

export default ForbiddenPage;
